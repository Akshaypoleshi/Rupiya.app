// Audience selector navigation and a simple form handler.
// This keeps the site working locally without a backend.

document.addEventListener('click', function (e) {
  const t = e.target;
  if (t.matches('.card')) {
    const target = t.getAttribute('data-target');
    if (target === 'farmers') {
      window.location.href = 'farmers.html';
    } else {
      // Smooth scroll to in-page section on index.html if available
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

const farmerForm = document.getElementById('farmerForm');
if (farmerForm) {
  farmerForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const msg = document.getElementById('formMsg');
    // Simulated registration feedback (replace with real API call)
    const name = farmerForm.elements['name'].value || 'Farmer';
    msg.textContent = `Thanks ${name}. Your interest is registered — our agronomy team will contact you soon.`;
    farmerForm.reset();
  });
}