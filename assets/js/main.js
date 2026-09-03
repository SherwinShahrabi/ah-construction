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

/* Preselect the estimate form's project type from a ?type= query param,
   e.g. contact.html?type=reference selects "Reference request". */
(function () {
  var select = document.getElementById('type');
  if (!select || !window.URLSearchParams) return;

  var wanted = new URLSearchParams(window.location.search).get('type');
  if (!wanted) return;

  var aliases = {
    reference: 'Reference request',
    kitchen: 'Kitchen remodeling',
    bathroom: 'Bathroom remodeling',
    adu: 'ADU or home addition'
  };
  var target = (aliases[wanted.toLowerCase()] || wanted).toLowerCase();

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].text.toLowerCase() === target) {
      select.selectedIndex = i;
      break;
    }
  }
})();
