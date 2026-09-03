/* A&H Construction — shared site behavior. No dependencies. */
(function () {
  var b = document.querySelector('.burger');
  var d = document.getElementById('drawer');
  if (!b || !d) return;

  b.addEventListener('click', function () {
    var open = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', String(!open));
    d.dataset.open = String(!open);
    b.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  });

  d.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      b.setAttribute('aria-expanded', 'false');
      d.dataset.open = 'false';
      b.setAttribute('aria-label', 'Open menu');
    });
  });
})();
