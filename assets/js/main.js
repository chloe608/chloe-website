function toggleMenu(){
  var el = document.getElementById('site-nav');
  if(!el) return;
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');

  body.classList.toggle('light-mode');

  const isLightMode = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

  // Update the icon
  themeToggle.innerHTML = isLightMode ? '🌙' : '☀️';
}

// Apply saved theme on page load
(function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeToggle = document.getElementById('theme-toggle');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '🌙';
  } else {
    themeToggle.innerHTML = '☀️';
  }
})();

// Apply consistent icon size
(function applyIconSize() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.style.fontSize = '24px';
  }
})();

// Lightbox (click-to-enlarge) functionality
(function attachLightbox(){
  function openLightbox(src, alt){
    const lb = document.getElementById('lightbox');
    const img = lb.querySelector('.lb-image');
    img.src = src;
    img.alt = alt || '';
    lb.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    const lb = document.getElementById('lightbox');
    const img = lb.querySelector('.lb-image');
    img.src = '';
    lb.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function(e){
    const thumb = e.target.closest('.photo-card, .photo-card-thumb');
    if(thumb){
      e.preventDefault();
      // try data-full first, then nested img src
      const full = thumb.getAttribute('data-full') || thumb.querySelector('img')?.src;
      const alt = thumb.querySelector('img')?.alt || '';
      if(full) openLightbox(full, alt);
    }

    if(e.target.closest('#lightbox') && !e.target.closest('.lb-image')){
      // click on overlay or close button
      if(e.target.classList.contains('lb-close') || e.target.id === 'lightbox' || e.target.closest('#lightbox')){
        closeLightbox();
      }
    }
  });

  // close on ESC
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      const lb = document.getElementById('lightbox');
      if(lb && lb.getAttribute('aria-hidden') === 'false') closeLightbox();
    }
  });
})();

// Fade out scroll hint on scroll or touch
window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
window.addEventListener('touchmove', function() {
  document.body.classList.add('scrolled');
});