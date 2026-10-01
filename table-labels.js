/*
 * On a phone, custom.css stacks each table row into a block. A stacked cell
 * names its column through data-label, copied here from the table header.
 * Mintlify renders pages client-side and the model catalog re-renders its
 * rows, so unlabelled cells are labelled whenever the DOM changes.
 */
(function () {
  var pending = false;

  function label() {
    pending = false;
    document.querySelectorAll("#content-area table").forEach(function (table) {
      var heads = Array.prototype.map.call(table.querySelectorAll("thead th"), function (th) {
        return th.textContent.trim();
      });
      if (!heads.length) return;
      table.querySelectorAll("tbody td:not([data-label])").forEach(function (td) {
        var name = heads[td.cellIndex];
        if (name) td.setAttribute("data-label", name);
      });
    });
  }

  new MutationObserver(function () {
    if (pending) return;
    pending = true;
    requestAnimationFrame(label);
  }).observe(document.documentElement, { childList: true, subtree: true });
  label();
})();
