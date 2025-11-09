(function () {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('topNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Normalize "Back to Home Catalog" links across different deploy paths (e.g., GitHub Pages project sites)
  // Automatically calculates the correct path to index.html#catalog based on current page location
  document.addEventListener('DOMContentLoaded', function () {
    const homeLinks = document.querySelectorAll('a[data-home-catalog]');
    if (homeLinks.length === 0) return;
    
    // Get current page path and build target URL
    const currentPath = window.location.pathname;
    const origin = window.location.origin;
    
    // Known content directories in the project
    const knownDirs = ['comfyui', 'sdwan'];
    
    // Split path into segments (remove empty strings and index.html)
    const pathSegments = currentPath.split('/').filter(function(p) { 
      return p && p !== 'index.html' && !p.endsWith('.html'); 
    });
    
    // Determine base path
    // Strategy: Find the first known directory in the path
    // Everything before it (if any) is the repo name for GitHub Pages project sites
    let basePath = '/';
    let foundKnownDir = false;
    
    for (let i = 0; i < pathSegments.length; i++) {
      if (knownDirs.includes(pathSegments[i])) {
        foundKnownDir = true;
        // If we found a known dir and it's not the first segment, 
        // the segment before it is the repo name
        if (i > 0) {
          basePath = '/' + pathSegments[0] + '/';
        }
        break;
      }
    }
    
    // If no known dir found but we have segments, first segment might be repo name
    if (!foundKnownDir && pathSegments.length > 0) {
      const firstSegment = pathSegments[0];
      // Only treat as repo name if it's not obviously a file
      if (firstSegment && !firstSegment.includes('.')) {
        basePath = '/' + firstSegment + '/';
      }
    }
    
    // Build the target URL
    const targetUrl = origin + basePath + 'index.html#catalog';
    
    // Update all home catalog links
    homeLinks.forEach(function (link) {
      link.setAttribute('href', targetUrl);
      // Add click handler as backup to ensure navigation works
      link.addEventListener('click', function(e) {
        window.location.href = targetUrl;
        e.preventDefault();
      });
    });
  });
})();


