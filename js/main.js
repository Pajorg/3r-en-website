const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade').forEach(el => io.observe(el));

  // Formspree formulier met redirect naar bedanktpagina
  const form = document.querySelector('form[action*="formspree"]');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          window.location.href = 'https://3r-en.nl/bedankt.html';
        } else {
          alert('Er is iets misgegaan. Probeer het opnieuw of neem direct contact op.');
        }
      } catch (error) {
        alert('Er is iets misgegaan. Controleer uw internetverbinding.');
      }
    });
  }
