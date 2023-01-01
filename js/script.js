//Бургер меню
const menuBurger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu__list");
const html = document.getElementById('html');
const menuItem = document.querySelectorAll(".menu__item");

menuBurger.addEventListener("click", function(item) {
    menuBurger.classList.toggle("menu-open");
    menu.classList.toggle("menu-open");
    html.classList.toggle("lock");
    menuItem.forEach(function(item) {
        item.addEventListener('click', showMenu);
    })
})

function showMenu() {
    this.parentElement.classList.toggle('menu-open');
    menuBurger.classList.toggle("menu-open");
    html.classList.toggle("lock");
}

//Сдайдер галереии
var swiper = new Swiper(".myGallery", {
    spaceBetween: 100,
    breakpoints: {
        767.98: {
            slidesPerView: 2,
        },
        991.98: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});