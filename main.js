const berger = document.querySelector(".berger"); 
berger.addEventListener('click', menuToggle)

function menuToggle() {
    const menu = document.querySelector(".menuresponsive"); 
        menu.classList.toggle('open');
        berger.classList.toggle('open');
}
