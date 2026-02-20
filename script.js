const footer = document.getElementById('footer');
const btn = document.getElementById('showFooterBtn');
const WebsiteVersion = "0";

document.getElementById("logo").src = "/logo.png?v=" + Date.now();

if (localStorage.getItem("version") !== WebsiteVersion) {
    localStorage.setItem("version", WebsiteVersion);
    window.location.reload();
}

btn.addEventListener('click', () => {

  if (footer.style.bottom === '0px') {
    footer.style.bottom = '-130px';
  } else {

    footer.style.bottom = '0px';
  }

});


