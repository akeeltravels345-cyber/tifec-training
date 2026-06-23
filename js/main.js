/* ============================================================
   TIFEC Training Programs — site JS
   ============================================================ */

// ---- Mobile nav toggle ----
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }
})();

// ---- Scroll reveal ----
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

// ---- Lead capture forms ----
// NOTE FOR DEVELOPER: connect a real endpoint below.
// Replace FORM_ENDPOINT with your Formspree URL (https://formspree.io)
// or any webhook that accepts a POST. When null, submissions post to "/" which
// Netlify Forms captures automatically (the forms carry data-netlify="true").
// Submissions appear in your Netlify dashboard under Forms.
var FORM_ENDPOINT = null; // e.g. 'https://formspree.io/f/your-id' to override

(function () {
  var forms = document.querySelectorAll('form[data-lead-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var successId = form.getAttribute('data-success');
      var successEl = successId ? document.getElementById(successId) : null;
      var submitBtn = form.querySelector('[type="submit"]');

      function showSuccess() {
        if (successEl) {
          form.style.display = 'none';
          successEl.classList.add('show');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

      // Netlify Forms expects URL-encoded data (incl. the hidden form-name) POSTed to "/".
      var body = new URLSearchParams(new FormData(form)).toString();
      var endpoint = FORM_ENDPOINT || '/';

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body
      }).then(function () { showSuccess(); })
        .catch(function () { showSuccess(); }); // still confirm to the visitor
    });
  });
})();

// ---- Footer year ----
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = '2026'; }
})();
