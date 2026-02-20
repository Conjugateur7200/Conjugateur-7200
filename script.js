const footer = document.getElementById('footer');
const btn = document.getElementById('showFooterBtn');


btn.addEventListener('click', () => {

  if (footer.style.bottom === '0px') {
    footer.style.bottom = '-130px';
  } else {

    footer.style.bottom = '0px';
  }

});



