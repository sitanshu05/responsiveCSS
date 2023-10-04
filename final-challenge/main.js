// const nav = document.querySelector('.nav');
// const navToggle = document.querySelector('.nav-toggle');

// function toggle(){
//     nav.classList.toggle('nav-visible');
// }

// navToggle.onclick = () => toggle();

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');

function toggleNav() {
    nav.classList.toggle('nav-visible');
}

navToggle.addEventListener('click', toggleNav);