(function () {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('topNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Normalize "Back to Home Catalog" links across different deploy paths (e.g., GitHub Pages project sites)
  // Any <a> with data-home-catalog will be pointed to ../index.html#catalog relative to current page
  document.addEventListener('DOMContentLoaded', function () {
    const homeLinks = document.querySelectorAll('a[data-home-catalog]');
    homeLinks.forEach(function (link) {
      try {
        const targetUrl = new URL('../index.html#catalog', window.location.href);
        link.setAttribute('href', targetUrl.href);
      } catch (e) {
        // no-op: keep original href as fallback
      }
    });
  });
})();


