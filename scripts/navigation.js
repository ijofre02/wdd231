const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar')

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navlinks.classList.toggle('show');
});

/* ===== FOOTER ======== */
const year = document.querySelector('#currentYear');
year.textContent = new Date().getFullYear();

document.getElementById('lastModified').innerHTML = document.lastModified;