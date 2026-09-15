// Relief Physiotherapy Rehab Care — script.js

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Appointment form -> WhatsApp
  var form = document.getElementById('appointmentForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var date = document.getElementById('date').value;
      var message = document.getElementById('message').value.trim();

      var text = 'Hi, I would like to enquire about an appointment at Relief Physiotherapy Rehab Care.\n\n';
      text += 'Name: ' + name + '\n';
      text += 'Phone: ' + phone + '\n';
      if (date) text += 'Preferred Date: ' + date + '\n';
      if (message) text += 'Concern: ' + message;

      var url = 'https://wa.me/919309844644?text=' + encodeURIComponent(text);
      window.open(url, '_blank', 'noopener');
    });
  }
});
