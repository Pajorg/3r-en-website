const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade').forEach(el => io.observe(el));

  function sendForm() {
    const fn = document.getElementById('fn').value.trim();
    const em = document.getElementById('em').value.trim();
    const msg = document.getElementById('msg').value.trim();
    if (!fn || !em || !msg) { alert('Vul alle verplichte velden in.'); return; }
    document.getElementById('conf').style.display = 'block';
    const btn = document.querySelector('.form-submit');
    btn.disabled = true; btn.textContent = 'Verzonden ✓'; btn.style.opacity = '0.6';
  }