(function () {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('topNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
})();


