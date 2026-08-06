/*
 * Overmind Flow — the docs' diagram engine.
 *
 * Replaces mermaid for the flow diagrams in these docs. Mermaid lays out
 * against an unbounded canvas and then lets the browser scale the result
 * down to fit the content column, so a seven-step left-to-right loop
 * arrives at the reader as a squashed, unreadable strip. This engine
 * measures first and lays out second, so a diagram is never scaled to fit:
 * it is *composed* to fit.
 *
 * What it does differently:
 *   - Real text metrics. Every label is measured in the page's actual font
 *     (after document.fonts.ready) and wrapped to a sane column, so a box
 *     is exactly as big as its content needs.
 *   - Responsive axis. The declared axis is a preference, not a promise.
 *     If a row layout would overflow the content column, the same graph is
 *     re-laid-out as a column. Diagrams reflow on resize.
 *   - Sugiyama-style layering: cycle-safe ranking, virtual nodes for edges
 *     that span ranks, barycentre ordering to cut crossings, then median
 *     alignment with overlap packing so chains come out straight.
 *   - Fanned ports and lane-routed back edges, so nothing overlaps and
 *     return arcs travel outside the diagram instead of through it.
 *
 * Authoring — a ```flow fenced block:
 *
 *     flow row                       # or: flow col
 *     title: The Overmind loop       # optional, used as the a11y label
 *     A[Agents | discovered from code]  -> O[Observability]
 *     O -> D[Datasets] -> E[Eval]
 *     E -> DEC{Fine-tune wins?} : per metric
 *     DEC ~> A : no, keep iterating
 *
 *   Nodes   ID[Title | Subtitle]  box (default)
 *           ID{Title}             decision, chamfered
 *           ID(Title)             pill, for terminals
 *   Edges   ->  -->  =>           solid
 *           ~>  -.->              dashed
 *   Labels  trailing `: text` on the statement (outside any brackets)
 *
 * Colours come from CSS custom properties defined in custom.css, so light
 * and dark mode flip without a re-render.
 */

(function () {
  "use strict";

  /* ─── Type and geometry ─────────────────────────────────────────────── */

  // These sizes and this face must stay in step with the .om-flow-title /
  // .om-flow-sub / .om-flow-chip-text rules in custom.css — text is
  // measured here before it's ever drawn, so a mismatch against what the
  // SVG actually renders with is exactly what makes wrapping/overflow flaky.
  var FACE = '"Geist Mono", ui-monospace, monospace';
  var T = {
    title: "400 13px " + FACE,
    sub: "400 11px " + FACE,
    label: "400 11px " + FACE,
    titleLead: 19,
    subLead: 16,
    titleGap: 4, // between the title block and the subtitle block
    padX: 15,
    padY: 12,
    minWidth: 92,
    maxText: 190, // wrap column for labels
  };

  var G = {
    rankGap: 50, // clear space between rank bands, along the flow axis
    nodeGap: 22, // clear space between siblings, along the cross axis
    virtualWidth: 16, // channel reserved for an edge crossing a rank
    radius: 6,
    chamfer: 10,
    pillRadius: 999,
    portSpread: 0.56, // fraction of a node face used to fan its edges
    laneGap: 20, // between stacked back-edge lanes
    laneInset: 24, // from the diagram edge to the first back-edge lane
    laneJog: 14, // how far a back edge climbs into the rank gap before it
    // turns toward the lane — keeps the turn clear of every node's rank band
    corner: 9, // back-edge corner rounding
    labelPadX: 5,
    labelPadY: 2,
    margin: 4,
  };

  /* ─── Text measurement ──────────────────────────────────────────────── */

  var ctx = null;
  function measure(text, font) {
    if (!ctx) ctx = document.createElement("canvas").getContext("2d");
    ctx.font = font;
    return ctx.measureText(text).width;
  }

  function wrap(text, font, maxWidth) {
    var words = String(text).split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    var lines = [];
    var line = words[0];
    for (var i = 1; i < words.length; i++) {
      var next = line + " " + words[i];
      if (measure(next, font) <= maxWidth) line = next;
      else {
        lines.push(line);
        line = words[i];
      }
    }
    lines.push(line);
    return lines;
  }

  /* ─── Parser ────────────────────────────────────────────────────────── */

  var OPEN = "[{(";
  var CLOSE = "]})";
  var EDGE_OP = /^(-\.->|-{1,2}>|~{1,2}>|={1,2}>)/;

  function isColumn(word) {
    return /^(col|column|td|tb|down|vertical)$/i.test(word);
  }

  function parse(src) {
    var lines = src.split("\n");
    var spec = { dir: "row", title: "", nodes: [], byId: {}, edges: [] };
    var started = false;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line || line.charAt(0) === "#" || line.slice(0, 2) === "//") continue;

      if (!started) {
        var head = line.match(/^flow\s+(\S+)\s*$/i);
        if (!head) return null; // not one of ours — leave the block alone
        spec.dir = isColumn(head[1]) ? "col" : "row";
        started = true;
        continue;
      }

      var titled = line.match(/^title:\s*(.+)$/i);
      if (titled) {
        spec.title = titled[1].trim();
        continue;
      }

      statement(line, spec);
    }

    return started && spec.nodes.length ? spec : null;
  }

  // Splits one statement into node references, the operators between them,
  // and a trailing `: label`. Bracket depth is tracked so that a colon or an
  // arrow inside a node label ("Fix: dedupe rows") is left alone.
  function statement(line, spec) {
    var depth = 0;
    var buf = "";
    var refs = [];
    var ops = [];
    var label = null;

    for (var i = 0; i < line.length; i++) {
      var c = line.charAt(i);
      if (depth === 0) {
        var op = line.slice(i).match(EDGE_OP);
        if (op) {
          refs.push(buf.trim());
          ops.push(op[0]);
          buf = "";
          i += op[0].length - 1;
          continue;
        }
        if (c === ":") {
          label = line.slice(i + 1).trim();
          break;
        }
      }
      if (OPEN.indexOf(c) >= 0) depth++;
      else if (CLOSE.indexOf(c) >= 0) depth--;
      buf += c;
    }
    refs.push(buf.trim());

    var nodes = [];
    for (var j = 0; j < refs.length; j++) {
      var node = reference(refs[j], spec);
      if (!node) return;
      nodes.push(node);
    }

    for (var k = 0; k < ops.length; k++) {
      spec.edges.push({
        from: nodes[k].id,
        to: nodes[k + 1].id,
        dashed: /~|\./.test(ops[k]),
        // A label on a chain belongs to its final hop.
        label: k === ops.length - 1 ? label : null,
      });
    }
  }

  var REF = /^([A-Za-z0-9_.-]+)\s*(?:\[([\s\S]*)\]|\{([\s\S]*)\}|\(([\s\S]*)\))?$/;

  function reference(str, spec) {
    var m = str.match(REF);
    if (!m) return null;

    var id = m[1];
    var shape = null;
    var body = null;
    if (m[2] != null) {
      shape = "box";
      body = m[2];
    } else if (m[3] != null) {
      shape = "decision";
      body = m[3];
    } else if (m[4] != null) {
      shape = "pill";
      body = m[4];
    }

    var node = spec.byId[id];
    if (!node) {
      node = { id: id, shape: "box", title: id, sub: "", order: spec.nodes.length };
      spec.byId[id] = node;
      spec.nodes.push(node);
    }
    if (body != null) {
      var parts = body.split("|");
      node.shape = shape;
      node.title = unquote(parts[0].trim());
      node.sub = parts.length > 1 ? unquote(parts.slice(1).join("|").trim()) : "";
    }
    return node;
  }

  function unquote(s) {
    return s.replace(/^["']|["']$/g, "").trim();
  }

  /* ─── Sizing ────────────────────────────────────────────────────────── */

  function sizeNodes(spec) {
    spec.nodes.forEach(function (n) {
      n.titleLines = wrap(n.title, T.title, T.maxText);
      n.subLines = n.sub ? wrap(n.sub, T.sub, T.maxText) : [];

      var widest = 0;
      n.titleLines.forEach(function (l) {
        widest = Math.max(widest, measure(l, T.title));
      });
      n.subLines.forEach(function (l) {
        widest = Math.max(widest, measure(l, T.sub));
      });

      var padX = n.shape === "decision" ? T.padX + G.chamfer : T.padX;
      n.w = Math.max(T.minWidth, Math.ceil(widest) + padX * 2);
      n.h =
        T.padY * 2 +
        n.titleLines.length * T.titleLead +
        (n.subLines.length ? T.titleGap + n.subLines.length * T.subLead : 0);
      n.h = Math.ceil(n.h);
    });
  }

  /* ─── Layering ──────────────────────────────────────────────────────── */

  // Depth-first cycle detection. Edges that close a cycle are pulled out of
  // the ranking pass and drawn later as return arcs, which is what they are.
  function findBackEdges(spec) {
    var out = {};
    spec.nodes.forEach(function (n) {
      out[n.id] = [];
    });
    spec.edges.forEach(function (e, i) {
      if (out[e.from]) out[e.from].push(i);
    });

    var state = {}; // 0 unseen · 1 on stack · 2 done
    var back = {};

    function visit(id) {
      state[id] = 1;
      out[id].forEach(function (ei) {
        var to = spec.edges[ei].to;
        if (state[to] === 1) back[ei] = true;
        else if (!state[to]) visit(to);
      });
      state[id] = 2;
    }

    spec.nodes.forEach(function (n) {
      if (!state[n.id]) visit(n.id);
    });

    spec.edges.forEach(function (e, i) {
      e.back = !!back[i];
    });
    return spec.edges.filter(function (e) {
      return !e.back;
    });
  }

  // Longest-path layering over the acyclic subgraph.
  function rank(spec, forward) {
    var ranks = {};
    spec.nodes.forEach(function (n) {
      ranks[n.id] = 0;
    });

    // |V| relaxation rounds is the safe bound for longest-path on a DAG.
    for (var pass = 0; pass < spec.nodes.length; pass++) {
      var moved = false;
      forward.forEach(function (e) {
        var want = ranks[e.from] + 1;
        if (want > ranks[e.to]) {
          ranks[e.to] = want;
          moved = true;
        }
      });
      if (!moved) break;
    }

    spec.nodes.forEach(function (n) {
      n.rank = ranks[n.id];
    });
  }

  /* ─── Layout ────────────────────────────────────────────────────────── */

  // Lays the graph out along `axis`. Returns cells (real + virtual nodes),
  // routed edges, and the bounding box. Flow coordinates are `f`, cross
  // coordinates are `c`; the renderer maps them onto x/y.
  function layout(spec, axis) {
    var horizontal = axis === "row";
    var cells = [];
    var byId = {};

    spec.nodes.forEach(function (n) {
      var cell = {
        id: n.id,
        node: n,
        rank: n.rank,
        real: true,
        fsize: horizontal ? n.w : n.h,
        csize: horizontal ? n.h : n.w,
        order: n.order,
        f: 0,
        c: 0,
      };
      cells.push(cell);
      byId[n.id] = cell;
    });

    // Virtual cells reserve a channel for every rank an edge passes over,
    // so long edges bend around boxes instead of through them.
    var routes = [];
    var virtualSeq = 0;
    spec.edges.forEach(function (e) {
      var a = byId[e.from];
      var b = byId[e.to];
      if (!a || !b) return;

      if (e.back || b.rank <= a.rank) {
        routes.push({ edge: e, chain: [a, b], back: true });
        return;
      }

      var chain = [a];
      for (var r = a.rank + 1; r < b.rank; r++) {
        var v = {
          id: " v" + virtualSeq++,
          node: null,
          rank: r,
          real: false,
          fsize: 0,
          csize: G.virtualWidth,
          order: a.order,
          f: 0,
          c: 0,
        };
        cells.push(v);
        byId[v.id] = v;
        chain.push(v);
      }
      chain.push(b);
      routes.push({ edge: e, chain: chain, back: false });
    });

    var layers = groupByRank(cells);
    order(layers, routes);
    place(layers, routes, labelGaps(routes, horizontal));

    var box = bounds(cells);
    var paths = route(routes, horizontal, box);

    // Back-edge lanes live outside the node block; fold them into the box.
    paths.forEach(function (p) {
      p.points.forEach(function (pt) {
        box.cMin = Math.min(box.cMin, pt.c);
        box.cMax = Math.max(box.cMax, pt.c);
        box.fMin = Math.min(box.fMin, pt.f);
        box.fMax = Math.max(box.fMax, pt.f);
      });
    });

    return {
      axis: axis,
      cells: cells,
      paths: paths,
      fSize: box.fMax - box.fMin,
      cSize: box.cMax - box.cMin,
      origin: { f: box.fMin, c: box.cMin },
      width: horizontal ? box.fMax - box.fMin : box.cMax - box.cMin,
      height: horizontal ? box.cMax - box.cMin : box.fMax - box.fMin,
    };
  }

  function groupByRank(cells) {
    var layers = [];
    cells.forEach(function (cell) {
      (layers[cell.rank] || (layers[cell.rank] = [])).push(cell);
    });
    for (var i = 0; i < layers.length; i++) {
      if (!layers[i]) layers[i] = [];
      layers[i].sort(function (a, b) {
        return a.order - b.order;
      });
      layers[i].forEach(function (cell, idx) {
        cell.pos = idx;
      });
    }
    return layers;
  }

  // Barycentre sweeps: repeatedly reorder each layer by the mean position of
  // its neighbours in the adjacent layer. Four passes is where crossings stop
  // improving on graphs this size.
  function order(layers, routes) {
    var links = adjacency(routes);

    for (var sweep = 0; sweep < 4; sweep++) {
      var down = sweep % 2 === 0;
      var start = down ? 1 : layers.length - 2;
      var stop = down ? layers.length : -1;
      var step = down ? 1 : -1;

      for (var i = start; i !== stop; i += step) {
        var layer = layers[i];
        layer.forEach(function (cell) {
          var peers = down ? links.up[cell.id] : links.down[cell.id];
          cell.bary = peers && peers.length ? mean(peers.map(posOf)) : cell.pos;
        });
        layer.sort(function (a, b) {
          return a.bary - b.bary || a.pos - b.pos;
        });
        layer.forEach(function (cell, idx) {
          cell.pos = idx;
        });
      }
    }
  }

  function adjacency(routes) {
    var up = {};
    var down = {};
    routes.forEach(function (r) {
      if (r.back) return;
      for (var i = 0; i < r.chain.length - 1; i++) {
        var a = r.chain[i];
        var b = r.chain[i + 1];
        (down[a.id] || (down[a.id] = [])).push(b);
        (up[b.id] || (up[b.id] = [])).push(a);
      }
    });
    return { up: up, down: down };
  }

  function posOf(cell) {
    return cell.pos;
  }

  function mean(xs) {
    var total = 0;
    for (var i = 0; i < xs.length; i++) total += xs[i];
    return total / xs.length;
  }

  function median(xs) {
    if (!xs.length) return null;
    var s = xs.slice().sort(function (a, b) {
      return a - b;
    });
    var mid = s.length >> 1;
    return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
  }

  // Cross-axis coordinates: seed each layer centred on zero, then alternate
  // median-alignment passes so a node sits opposite its neighbours, packing
  // out any overlap it causes.
  // On a row layout an edge label is a horizontal chip sitting in the gap
  // between two ranks, so a constant gap puts "agent attribution" straight
  // through the node it points at. Each boundary is widened to hold the
  // widest chip that lands on it, and only that boundary.
  function labelGaps(routes, horizontal) {
    if (!horizontal) return null;
    var gaps = [];
    routes.forEach(function (r) {
      if (r.back || !r.edge.label) return;
      var a = r.chain[0];
      var b = r.chain[r.chain.length - 1];
      var boundary = Math.floor((a.rank + b.rank - 1) / 2);
      var need = Math.ceil(measure(r.edge.label, T.label)) + G.labelPadX * 2 + 22;
      gaps[boundary] = Math.max(gaps[boundary] || G.rankGap, need);
    });
    return gaps;
  }

  function place(layers, routes, gaps) {
    layers.forEach(function (layer) {
      var total = 0;
      layer.forEach(function (cell, i) {
        total += cell.csize + (i ? G.nodeGap : 0);
      });
      var cursor = -total / 2;
      layer.forEach(function (cell) {
        cell.c = cursor + cell.csize / 2;
        cursor += cell.csize + G.nodeGap;
      });
    });

    var links = adjacency(routes);
    for (var sweep = 0; sweep < 4; sweep++) {
      var down = sweep % 2 === 0;
      var start = down ? 1 : layers.length - 2;
      var stop = down ? layers.length : -1;
      var step = down ? 1 : -1;

      for (var i = start; i !== stop; i += step) {
        var layer = layers[i];
        var want = {};
        layer.forEach(function (cell) {
          var peers = down ? links.up[cell.id] : links.down[cell.id];
          if (peers && peers.length) {
            var m = median(
              peers.map(function (p) {
                return p.c;
              })
            );
            if (m != null) want[cell.id] = m;
          }
        });
        pack(layer, want);
      }
    }

    // Flow-axis coordinates: one band per rank, each as thick as its
    // thickest cell, separated by a constant gap.
    var f = 0;
    layers.forEach(function (layer, i) {
      var thickness = 0;
      layer.forEach(function (cell) {
        thickness = Math.max(thickness, cell.fsize);
      });
      if (i) f += (gaps && gaps[i - 1]) || G.rankGap;
      layer.forEach(function (cell) {
        cell.f = f + thickness / 2;
      });
      f += thickness;
    });
  }

  // Moves cells toward their desired cross position without letting any two
  // overlap: a forward pass establishes lower bounds, a backward pass claws
  // back the slack the forward pass could not know about.
  function pack(layer, want) {
    var lower = [];
    var prevEnd = null;

    layer.forEach(function (cell, i) {
      var target = want[cell.id] != null ? want[cell.id] : cell.c;
      var min = prevEnd == null ? null : prevEnd + G.nodeGap + cell.csize / 2;
      lower[i] = min;
      cell.c = min == null ? target : Math.max(target, min);
      prevEnd = cell.c + cell.csize / 2;
    });

    var nextStart = null;
    for (var i = layer.length - 1; i >= 0; i--) {
      var cell = layer[i];
      var target = want[cell.id] != null ? want[cell.id] : cell.c;
      var c = Math.min(cell.c, target);
      if (nextStart != null) c = Math.min(c, nextStart - G.nodeGap - cell.csize / 2);
      if (lower[i] != null) c = Math.max(c, lower[i]);
      cell.c = c;
      nextStart = cell.c - cell.csize / 2;
    }
  }

  function bounds(cells) {
    var box = { fMin: Infinity, fMax: -Infinity, cMin: Infinity, cMax: -Infinity };
    cells.forEach(function (cell) {
      if (!cell.real) return;
      box.fMin = Math.min(box.fMin, cell.f - cell.fsize / 2);
      box.fMax = Math.max(box.fMax, cell.f + cell.fsize / 2);
      box.cMin = Math.min(box.cMin, cell.c - cell.csize / 2);
      box.cMax = Math.max(box.cMax, cell.c + cell.csize / 2);
    });
    return box;
  }

  /* ─── Edge routing ──────────────────────────────────────────────────── */

  function route(routes, horizontal, box) {
    var exits = {};
    var entries = {};

    routes.forEach(function (r) {
      if (r.back) return;
      var a = r.chain[0];
      var b = r.chain[r.chain.length - 1];
      (exits[a.id] || (exits[a.id] = [])).push(r);
      (entries[b.id] || (entries[b.id] = [])).push(r);
    });

    // Fan multiple edges across a node's face rather than stacking them on
    // one point, ordered by where they are headed so they never cross.
    function port(cell, list, r, forwardFace) {
      if (!list || list.length < 2) return cell.c;
      var sorted = list.slice().sort(function (x, y) {
        var xc = forwardFace ? x.chain[1].c : x.chain[x.chain.length - 2].c;
        var yc = forwardFace ? y.chain[1].c : y.chain[y.chain.length - 2].c;
        return xc - yc;
      });
      var idx = sorted.indexOf(r);
      var span = cell.csize * G.portSpread;
      return cell.c - span / 2 + (span * idx) / (sorted.length - 1);
    }

    var lanes = 0;
    var out = [];

    routes.forEach(function (r) {
      if (r.back) {
        out.push(backPath(r, box, lanes++));
        return;
      }

      var a = r.chain[0];
      var b = r.chain[r.chain.length - 1];
      var points = [{ f: a.f + a.fsize / 2, c: port(a, exits[a.id], r, true) }];
      for (var i = 1; i < r.chain.length - 1; i++) {
        points.push({ f: r.chain[i].f, c: r.chain[i].c });
      }
      points.push({ f: b.f - b.fsize / 2, c: port(b, entries[b.id], r, false) });

      out.push({
        edge: r.edge,
        points: points,
        d: smooth(points),
        arrowAt: "end",
        back: false,
      });
    });

    return out;
  }

  // A chain of cubics whose control points sit on the flow-axis midpoint of
  // each segment: straight where the cross positions agree, a soft S where
  // they do not.
  function smooth(points) {
    var d = "M " + fmt(points[0]);
    for (var i = 1; i < points.length; i++) {
      var p = points[i - 1];
      var q = points[i];
      if (Math.abs(p.c - q.c) < 0.5) {
        d += " L " + fmt(q);
      } else {
        var mid = (p.f + q.f) / 2;
        d +=
          " C " + n(mid) + "," + n(p.c) + " " + n(mid) + "," + n(q.c) + " " + fmt(q);
      }
    }
    return d;
  }

  // A chain of straight runs with each interior corner eased into a short
  // quadratic arc — the general tool a routed path (any number of turns)
  // needs, in place of hand-picked control points per turn.
  function roundedPolyline(points, radius) {
    var d = "M " + fmt(points[0]);
    for (var i = 1; i < points.length - 1; i++) {
      var prev = points[i - 1];
      var cur = points[i];
      var next = points[i + 1];
      var r = Math.min(radius, dist(prev, cur) / 2, dist(cur, next) / 2);
      d += " L " + fmt(along(cur, prev, r)) + " Q " + fmt(cur) + " " + fmt(along(cur, next, r));
    }
    d += " L " + fmt(points[points.length - 1]);
    return d;
  }

  function dist(p, q) {
    return Math.hypot(p.f - q.f, p.c - q.c);
  }

  function along(from, to, distance) {
    var len = dist(from, to) || 1;
    return {
      f: from.f + ((to.f - from.f) / len) * distance,
      c: from.c + ((to.c - from.c) / len) * distance,
    };
  }

  // Return arcs leave a node from its rank-band face (the same edge a
  // forward edge would enter or exit through), climb straight into the gap
  // between ranks — a strip no node ever occupies, regardless of its cross
  // position — before turning toward the private lane outside the whole
  // node block. That gap-first jog is what keeps a back edge from cutting
  // straight through a sibling that shares its rank, the way a shortest
  // path from the node's own side face would.
  function backPath(r, box, lane) {
    var a = r.chain[0];
    var b = r.chain[1];
    var laneC = box.cMin - G.laneInset - lane * G.laneGap;

    var aFace = { f: a.f - a.fsize / 2, c: a.c };
    var bFace = { f: b.f - b.fsize / 2, c: b.c };
    var aTurn = { f: aFace.f - G.laneJog, c: a.c };
    var bTurn = { f: bFace.f - G.laneJog, c: b.c };
    var aLane = { f: aTurn.f, c: laneC };
    var bLane = { f: bTurn.f, c: laneC };

    var points = [aFace, aTurn, aLane, bLane, bTurn, bFace];

    return {
      edge: r.edge,
      points: points,
      d: roundedPolyline(points, G.corner),
      arrowAt: "end",
      back: true,
    };
  }

  function n(v) {
    return Math.round(v * 100) / 100;
  }

  function fmt(p) {
    return n(p.f) + "," + n(p.c);
  }

  /* ─── Rendering ─────────────────────────────────────────────────────── */

  var NS = "http://www.w3.org/2000/svg";
  var uid = 0;

  function el(name, attrs) {
    var node = document.createElementNS(NS, name);
    for (var key in attrs) {
      if (attrs[key] != null) node.setAttribute(key, attrs[key]);
    }
    return node;
  }

  function draw(spec, L) {
    var horizontal = L.axis === "row";
    // Flow/cross → x/y, with the layout origin moved to the margin.
    var dx = G.margin - (horizontal ? L.origin.f : L.origin.c);
    var dy = G.margin - (horizontal ? L.origin.c : L.origin.f);
    var X = horizontal
      ? function (p) {
          return p.f + dx;
        }
      : function (p) {
          return p.c + dx;
        };
    var Y = horizontal
      ? function (p) {
          return p.c + dy;
        }
      : function (p) {
          return p.f + dy;
        };

    var width = Math.ceil(L.width + G.margin * 2);
    var height = Math.ceil(L.height + G.margin * 2);

    var svg = el("svg", {
      class: "om-flow-svg",
      viewBox: "0 0 " + width + " " + height,
      width: width,
      height: height,
      role: "img",
      "aria-label": spec.title || describe(spec),
      preserveAspectRatio: "xMidYMid meet",
    });
    svg.style.maxWidth = width + "px";

    var arrow = "om-arrow-" + ++uid;
    var defs = el("defs");
    var marker = el("marker", {
      id: arrow,
      viewBox: "0 0 10 10",
      refX: 8.5,
      refY: 5,
      markerWidth: 6,
      markerHeight: 6,
      orient: "auto-start-reverse",
      markerUnits: "strokeWidth",
    });
    marker.appendChild(el("path", { d: "M 0 1 L 9 5 L 0 9 z", class: "om-flow-head" }));
    defs.appendChild(marker);
    svg.appendChild(defs);

    var edgeLayer = el("g", { class: "om-flow-edges" });
    var labelLayer = el("g", { class: "om-flow-labels" });
    var nodeLayer = el("g", { class: "om-flow-nodes" });
    svg.appendChild(edgeLayer);
    svg.appendChild(nodeLayer);
    svg.appendChild(labelLayer);

    L.paths.forEach(function (p) {
      var d = p.d.replace(/(-?[\d.]+),(-?[\d.]+)/g, function (_, f, c) {
        var pt = { f: parseFloat(f), c: parseFloat(c) };
        return n(X(pt)) + "," + n(Y(pt));
      });
      var path = el("path", {
        d: d,
        class: "om-flow-edge" + (p.edge.dashed ? " is-dashed" : "") + (p.back ? " is-back" : ""),
        "marker-end": "url(#" + arrow + ")",
        fill: "none",
      });
      edgeLayer.appendChild(path);
      if (p.edge.label) labelLayer.appendChild(edgeLabel(p.edge.label, path));
    });

    L.cells.forEach(function (cell) {
      if (cell.real) nodeLayer.appendChild(drawNode(cell, X, Y, horizontal));
    });

    return svg;
  }

  function drawNode(cell, X, Y, horizontal) {
    var node = cell.node;
    var w = horizontal ? cell.fsize : cell.csize;
    var h = horizontal ? cell.csize : cell.fsize;
    var cx = X(cell);
    var cy = Y(cell);
    var left = cx - w / 2;
    var top = cy - h / 2;

    var g = el("g", { class: "om-flow-node is-" + node.shape });

    if (node.shape === "decision") {
      var k = Math.min(G.chamfer, w / 3);
      g.appendChild(
        el("path", {
          class: "om-flow-shape",
          d:
            "M " + n(left + k) + " " + n(top) +
            " L " + n(left + w - k) + " " + n(top) +
            " L " + n(left + w) + " " + n(cy) +
            " L " + n(left + w - k) + " " + n(top + h) +
            " L " + n(left + k) + " " + n(top + h) +
            " L " + n(left) + " " + n(cy) + " Z",
        })
      );
    } else {
      g.appendChild(
        el("rect", {
          class: "om-flow-shape",
          x: n(left),
          y: n(top),
          width: n(w),
          height: n(h),
          rx: node.shape === "pill" ? Math.min(G.pillRadius, h / 2) : G.radius,
        })
      );
    }

    var textHeight =
      node.titleLines.length * T.titleLead +
      (node.subLines.length ? T.titleGap + node.subLines.length * T.subLead : 0);
    var baseline = cy - textHeight / 2 + T.titleLead * 0.76;

    var title = el("text", { class: "om-flow-title", x: n(cx), y: n(baseline) });
    node.titleLines.forEach(function (line, i) {
      title.appendChild(el("tspan", { x: n(cx), dy: i ? T.titleLead : 0 })).textContent =
        line;
    });
    g.appendChild(title);

    if (node.subLines.length) {
      var subTop =
        baseline + (node.titleLines.length - 1) * T.titleLead + T.titleGap + T.subLead * 0.9;
      var sub = el("text", { class: "om-flow-sub", x: n(cx), y: n(subTop) });
      node.subLines.forEach(function (line, i) {
        sub.appendChild(el("tspan", { x: n(cx), dy: i ? T.subLead : 0 })).textContent = line;
      });
      g.appendChild(sub);
    }

    return g;
  }

  // Chips are positioned off the rendered path, so the text always sits on
  // the line no matter how the curve turned out.
  function edgeLabel(text, path) {
    var g = el("g", { class: "om-flow-chip" });
    var width = measure(text, T.label);
    var rect = el("rect", {
      class: "om-flow-chip-bg",
      width: n(width + G.labelPadX * 2),
      height: 17,
      rx: 3,
    });
    var label = el("text", { class: "om-flow-chip-text" });
    label.textContent = text;
    g.appendChild(rect);
    g.appendChild(label);
    g.dataset.pending = "1";
    g.__place = function () {
      var length = path.getTotalLength();
      if (!length) return;
      var p = path.getPointAtLength(length / 2);
      rect.setAttribute("x", n(p.x - width / 2 - G.labelPadX));
      rect.setAttribute("y", n(p.y - 8.5));
      label.setAttribute("x", n(p.x));
      label.setAttribute("y", n(p.y + 4));
      delete g.dataset.pending;
    };
    return g;
  }

  function describe(spec) {
    var names = {};
    spec.nodes.forEach(function (node) {
      names[node.id] = node.title;
    });
    var steps = spec.edges.slice(0, 12).map(function (e) {
      return names[e.from] + " to " + names[e.to];
    });
    return "Flow diagram: " + steps.join(", ") + ".";
  }

  /* ─── Fit and mount ─────────────────────────────────────────────────── */

  // The declared axis wins when it fits the column. When it does not, the
  // same graph is laid out on the other axis and whichever overflows least
  // is used — this is what keeps a long chain from arriving squashed.
  function fit(spec, available) {
    var first = layout(spec, spec.dir);
    if (first.width <= available) return first;

    var second = layout(spec, spec.dir === "row" ? "col" : "row");
    return second.width < first.width ? second : first;
  }

  function render(figure) {
    var spec = figure.__spec;
    var available = figure.clientWidth || figure.parentElement.clientWidth || 680;
    if (available <= 0) return;
    if (figure.__renderedAt === Math.round(available)) return;
    figure.__renderedAt = Math.round(available);

    sizeNodes(spec);
    var forward = findBackEdges(spec);
    rank(spec, forward);

    var svg = draw(spec, fit(spec, available));
    figure.textContent = "";
    figure.appendChild(svg);

    // Chips need the path measured in the document.
    requestAnimationFrame(function () {
      svg.querySelectorAll(".om-flow-chip").forEach(function (chip) {
        if (chip.__place) chip.__place();
      });
    });
  }

  // Mintlify nests a code block five deep inside scroll-area and toolbar
  // chrome. Climb to the outermost ancestor whose only content is this block
  // — the copy button and status span carry no text, so text equality is a
  // reliable stopping rule — and replace that, or the toolbar is left behind
  // floating over the diagram.
  function wrapperFor(pre) {
    var node = pre;
    var text = (pre.textContent || "").trim();
    var parent = node.parentElement;

    while (
      parent &&
      parent !== document.body &&
      parent.id !== "content-area" &&
      !/^(MAIN|ARTICLE|BODY)$/.test(parent.tagName) &&
      parent.querySelectorAll("pre").length === 1
    ) {
      if ((parent.textContent || "").trim() !== text && parent.children.length !== 1) break;
      node = parent;
      parent = node.parentElement;
    }
    return node;
  }

  function mount(pre) {
    if (pre.__omFlow) return;
    var source = pre.textContent || "";
    if (!/^\s*flow\s+\S+\s*$/m.test(source.split("\n")[0] || "")) return;

    var spec = parse(source);
    if (!spec) return;
    pre.__omFlow = true;

    // The code block belongs to React. Detaching it makes React reconcile
    // against a node that is no longer there and re-insert the rest of the
    // page around the hole — which hoisted the diagram above its own
    // section. So the block is hidden in place and the figure goes in
    // beside it; React keeps every node it owns.
    var wrapper = wrapperFor(pre);
    wrapper.setAttribute("data-om-flow-source", "");
    wrapper.style.display = "none";

    var figure = document.createElement("figure");
    figure.className = "om-flow";
    figure.__spec = spec;
    figure.__source = wrapper;
    wrapper.parentNode.insertBefore(figure, wrapper.nextSibling);

    render(figure);
    observer.observe(figure);
  }

  // A figure whose hidden source block React has since discarded is orphaned
  // and would otherwise stack up behind the replacement on the next render.
  function sweep() {
    document.querySelectorAll(".om-flow").forEach(function (figure) {
      if (figure.__source && !figure.__source.isConnected) figure.remove();
    });
  }

  var observer =
    typeof ResizeObserver === "function"
      ? new ResizeObserver(function (entries) {
          entries.forEach(function (entry) {
            render(entry.target);
          });
        })
      : { observe: function () {} };

  function scan() {
    sweep();
    document.querySelectorAll("pre:not([data-om-flow-source] pre)").forEach(mount);
  }

  function start() {
    scan();
    // Mintlify is a single-page app: pages swap without a script re-run.
    new MutationObserver(function () {
      if (start.queued) return;
      start.queued = true;
      requestAnimationFrame(function () {
        start.queued = false;
        scan();
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  // Measuring before the webfont lands would size every box to a fallback.
  var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  ready.then(function () {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", start);
    } else {
      start();
    }
  });
})();
