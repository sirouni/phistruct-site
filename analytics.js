/* PhiStruct marketing site only — never ship this in the iOS/Android app.
 *
 * Umami Cloud, cookie-free. Pageviews plus App Store CTA clicks
 * (`data-umami-event="app-store"`). No advertising, no cross-site id.
 *
 * Tracking ID lives in umamiWebsiteId below (Umami Cloud, site phistruct.app).
 */
window.PHI_ANALYTICS = {
  umamiWebsiteId: "63cbfd69-24d9-45ca-bb10-ac5fb69b810d",
};

(function () {
  var cfg = window.PHI_ANALYTICS || {};
  var id = cfg.umamiWebsiteId;
  if (!id) return;
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://cloud.umami.is/script.js";
  s.setAttribute("data-website-id", id);
  s.setAttribute(
    "data-domains",
    "phistruct.app,www.phistruct.app,sirouni.github.io"
  );
  document.head.appendChild(s);
})();
