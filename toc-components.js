/*
 * Overmind docs — "On this page" enhancer.
 *
 * Mintlify's TOC lists headings only. This script also surfaces the page's
 * notable components — diagrams, code, steps, tables, accordion groups — as
 * small linked rows under the heading each belongs to, so the rail reads as
 * a map of the page, not just its outline. Rows are styled in custom.css
 * (.om-toc-comps); anchors are stamped as id="om-comp-N".
 *
 * Idempotency: the computed entry list is fingerprinted onto the toc node;
 * re-runs (SPA navigations, late mermaid hydration) rebuild only when the
 * fingerprint changes.
 */
(function () {
  "use strict";

  var GLYPHS = {
    diagram: "◇", // ◇
    code: "‹›", // ‹›
    steps: "≡", // ≡
    table: "▦", // ▦
    accordions: "▤", // ▤
  };

  function codeLabel(el) {
    // A code group: label from its active (or first) language tab.
    var bar = el.querySelector('[data-component-part="code-group-tab-bar"]');
    if (bar) {
      var tab =
        bar.querySelector('[role="tab"][aria-selected="true"]') ||
        bar.querySelector('[role="tab"]');
      var txt = tab && tab.textContent.trim();
      return txt ? "Code · " + txt : "Code";
    }
    return "Code";
  }

  function collect(content) {
    var selector = [
      "h2[id]",
      "h3[id]",
      'svg[aria-roledescription]',
      '[data-component-part="code-group-tab-bar"]',
      '[data-component-part="code-block-root"]',
      ".steps",
      "table",
      ".accordion-group",
    ].join(",");

    var entries = [];
    var heading = null;
    var nodes = content.querySelectorAll(selector);

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var tag = el.tagName;

      if ((tag === "H2" || tag === "H3") && el.id) {
        heading = el.id;
        continue;
      }
      if (!heading) continue;

      var type = null;
      var label = null;

      if (tag === "svg" || tag === "SVG") {
        type = "diagram";
        label = "Diagram";
      } else if (el.matches('[data-component-part="code-group-tab-bar"]')) {
        type = "code";
        label = codeLabel(el.parentElement || el);
        el = el.parentElement || el; // anchor the whole group
      } else if (el.matches('[data-component-part="code-block-root"]')) {
        // Panels inside a code group are covered by the group row above.
        if (el.closest('[role="tabpanel"]')) continue;
        type = "code";
        label = "Code";
      } else if (el.classList.contains("steps")) {
        var n = el.querySelectorAll(".step").length;
        type = "steps";
        label = n ? "Steps · " + n : "Steps";
      } else if (tag === "TABLE") {
        type = "table";
        label = "Table";
      } else if (el.classList.contains("accordion-group")) {
        var d = el.querySelectorAll("details").length;
        type = "accordions";
        label = d ? "Accordions · " + d : "Accordions";
      }

      if (type) entries.push({ heading: heading, type: type, label: label, el: el });
    }
    return entries;
  }

  function enhance() {
    var content = document.getElementById("content-area");
    var toc = document.querySelector("ul.toc");
    if (!content || !toc) return;

    var entries = collect(content);
    var sig = entries
      .map(function (e) {
        return e.heading + ":" + e.type + ":" + e.label;
      })
      .join("|");
    if (toc.dataset.omSig === sig) return;
    toc.dataset.omSig = sig;

    var old = toc.querySelectorAll(".om-toc-comps");
    for (var i = 0; i < old.length; i++) old[i].remove();
    if (!entries.length) return;

    var byHeading = {};
    for (var j = 0; j < entries.length; j++) {
      var e = entries[j];
      e.el.id = e.el.id || "om-comp-" + j;
      (byHeading[e.heading] = byHeading[e.heading] || []).push(e);
    }

    Object.keys(byHeading).forEach(function (headingId) {
      var link = toc.querySelector(
        'a[href="#' + (window.CSS ? CSS.escape(headingId) : headingId) + '"]',
      );
      if (!link) return;
      var list = document.createElement("ul");
      list.className = "om-toc-comps";
      byHeading[headingId].forEach(function (e) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + e.el.id;
        var glyph = document.createElement("span");
        glyph.className = "om-toc-glyph";
        glyph.textContent = GLYPHS[e.type] || "◇";
        a.appendChild(glyph);
        a.appendChild(document.createTextNode(e.label));
        li.appendChild(a);
        list.appendChild(li);
      });
      // Right after the heading's link, before any nested sub-heading list.
      link.parentNode.insertBefore(list, link.nextSibling);
    });
  }

  var timer = null;
  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(enhance, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", schedule);
  } else {
    schedule();
  }
  new MutationObserver(schedule).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
