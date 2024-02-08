const hbger = document.querySelector('.hbger');
const nav = document.querySelector('.nav');


function showMenu(){
    nav.classList.toggle('nav-active');
}
hbger.addEventListener('click', showMenu);