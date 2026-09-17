/*
 * The eye in the navbar blinks, the way the website's EyeBlinkLogo does:
 * every 15s the still SVG is swapped for the blink GIF for 3s. The GIF is
 * fetched once and shown through a fresh object URL each time, because a
 * browser only plays a GIF from frame 0 when the src is a URL it has not
 * decoded before.
 *
 * Mintlify re-renders the navbar on client-side navigation, so the logo
 * <img> is looked up at every tick rather than held.
 */
(function () {
  var STILL = "/logo/overmind-eye-copper.svg";
  var BLINK = "/logo/overmind-eye-blink.gif";
  var INTERVAL_MS = 15000;
  var BLINK_MS = 3000;

  var blob = null;
  var objectUrl = null;

  function eyes() {
    return document.querySelectorAll('#navbar a[href="/"] img.nav-logo');
  }

  function setSrc(src) {
    eyes().forEach(function (img) {
      img.src = src;
    });
  }

  function getBlob() {
    if (blob) return Promise.resolve(blob);
    return fetch(BLINK)
      .then(function (res) {
        return res.blob();
      })
      .then(function (b) {
        blob = b;
        return b;
      });
  }

  function blink() {
    getBlob().then(function (b) {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = URL.createObjectURL(b);
      setSrc(objectUrl);
      setTimeout(function () {
        setSrc(STILL);
      }, BLINK_MS);
    });
  }

  setInterval(blink, INTERVAL_MS);
})();
