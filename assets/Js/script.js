const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
};

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    nav.classList.toggle('active')
  });



