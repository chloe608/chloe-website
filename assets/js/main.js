function toggleMenu(){
  var el = document.getElementById('site-nav');
  if(!el) return;
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}
