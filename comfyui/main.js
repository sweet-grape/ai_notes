(function () {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('topNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Normalize "Back to Home Catalog" links across different deploy paths (e.g., GitHub Pages project sites)
  // Automatically calculates the correct relative path to index.html#catalog based on current page location
  document.addEventListener('DOMContentLoaded', function () {
    const homeLinks = document.querySelectorAll('a[data-home-catalog]');
    if (homeLinks.length === 0) return;
    
    // Get current page path
    const currentPath = window.location.pathname;
    // Count how many directory levels deep we are (excluding filename)
    const pathParts = currentPath.split('/').filter(function(p) { return p && !p.endsWith('.html'); });
    const depth = pathParts.length;
    
    // Calculate relative path: go up 'depth' levels to reach root, then index.html#catalog
    let relativePath = '';
    for (let i = 0; i < depth; i++) {
      relativePath += '../';
    }
    relativePath += 'index.html#catalog';
    
    // Update all home catalog links
    homeLinks.forEach(function (link) {
      try {
        const targetUrl = new URL(relativePath, window.location.href);
        link.setAttribute('href', targetUrl.href);
      } catch (e) {
        // Fallback: try to use the original href or a simple relative path
        link.setAttribute('href', relativePath);
      }
    });
  });
})();


