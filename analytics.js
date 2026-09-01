/* PhiStruct marketing site only — never ship this in the iOS/Android app.
 *
 * Umami Cloud, cookie-free. Pageviews plus App Store CTA clicks
 * (`data-umami-event="app-store"`). No advertising, no cross-site id.
 *
 * After creating the site at https://cloud.umami.is (Hobby is enough),
 * paste the Website ID below and redeploy.
 */
window.PHI_ANALYTICS = {
  umamiWebsiteId: "",
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
