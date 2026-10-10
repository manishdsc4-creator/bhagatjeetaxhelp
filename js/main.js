document.addEventListener('DOMContentLoaded', function () {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? '×' : '☰';
    });
  }

  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get('service');
  const serviceSelect = document.querySelector('#service');
  if (requestedService && serviceSelect) {
    const match = Array.from(serviceSelect.options).find(option =>
      option.text.toLowerCase().includes(requestedService.toLowerCase()) ||
      requestedService.toLowerCase().includes(option.text.toLowerCase())
    );
    if (match) serviceSelect.value = match.value;
    else if (serviceSelect.querySelector('option[value="Other"]')) serviceSelect.value = 'Other';
  }

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.querySelector('#name').value.trim();
      const phone = document.querySelector('#phone').value.trim();
      const service = document.querySelector('#service').value || 'Not specified';
      const message = document.querySelector('#message').value.trim();
      const subject = encodeURIComponent('Website enquiry: ' + service);
      const body = encodeURIComponent(
        'Hello Bhagat Jee Tax Associates & Company,\n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + (phone || 'Not provided') + '\n' +
        'Service: ' + service + '\n\n' +
        'Requirement:\n' + (message || 'Please contact me to discuss the details.') + '\n\n' +
        'Sent via the company website.'
      );
      const status = document.querySelector('#form-status');
      if (status) status.textContent = 'Opening your email app. If it does not open, email swatibhagat075@gmail.com directly.';
      window.location.href = 'mailto:swatibhagat075@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});