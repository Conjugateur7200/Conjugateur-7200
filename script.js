const footer = document.getElementById('footer');
const btn = document.getElementById('showFooterBtn');

btn.addEventListener('click', () => {
  // Wenn Footer sichtbar, ausblenden
  if (footer.style.bottom === '0px') {
    footer.style.bottom = '-130px';
  } else {
    // Footer einblenden
    footer.style.bottom = '0px';
  }
});