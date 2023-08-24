// HAMBURGER MENI

const hamburgerMenu = document.querySelector('.hamburger__menu');
const nav = document.querySelectorAll('nav');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.toggle('active');
    }
});