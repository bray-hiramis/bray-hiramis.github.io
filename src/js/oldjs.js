const burgerMenu = document.querySelector('.burger');
const closeBurgerMenu = document.querySelector('.close-burger');
const navList = document.querySelectorAll('.nav-list');

// Show and hide burger menu when reached 992px
window.addEventListener('resize', function() {
    if (window.innerWidth <= 992) {
        burgerMenu.classList.remove('hidden-content-mobile'); // show burger menu
        burgerMenu.classList.add('show-mobile'); // add show class
        closeBurgerMenu.classList.add('hidden-content-mobile');
        for (let nav of navList) {
            nav.classList.add('hidden-content-mobile'); // hide navigation items
        }
    } else {
        burgerMenu.classList.add('hidden-content-mobile'); // hide burger menu
        burgerMenu.classList.remove('show-mobile'); // remove show class
        for (let nav of navList) {
            nav.classList.remove('hidden-content-mobile'); // show navigation items
        }
    }
});

// To show the Navigation list and the close image
burgerMenu.addEventListener('click', function() {
    for (let nav of navList) {
        if (nav.classList.contains('hidden-content-mobile')) {
            nav.classList.remove('hidden-content-mobile');
            burgerMenu.classList.remove('show-mobile');
            burgerMenu.classList.add('hidden-content-mobile');
            closeBurgerMenu.classList.remove('hidden-content-mobile');
            closeBurgerMenu.classList.add('show-mobile');
        }
    }
})

// To hide the Navigation list and the close image / back to the menu burger image
closeBurgerMenu.addEventListener('click', function() {
    for (let nav of navList) {
        if (!nav.classList.contains('hidden-content-mobile')) {
            nav.classList.add('hidden-content-mobile');
            closeBurgerMenu.classList.remove('show-mobile');
            closeBurgerMenu.classList.add('hidden-content-mobile');
            burgerMenu.classList.remove('hidden-content-mobile');
            burgerMenu.classList.add('show-mobile');
        }
    }
})