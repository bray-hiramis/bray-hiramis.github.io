// reveal hidden content
const viewMore = document.querySelector('.view-more');
const hiddenContent = document.querySelectorAll('.hidden-content');

viewMore.addEventListener("click", function() {
    for (let view of hiddenContent) {
        if (view.classList.contains('hidden-content')) {
            view.classList.remove('hidden-content');
            view.classList.toggle('show');
            viewMore.textContent = "Hide";
        } else {
            view.classList.toggle('hidden-content');
            viewMore.textContent = "View More";
        }
    }
});

// HAMBURGER MENU CODE
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');

// CHECKING THE LOAD STATE
this.window.addEventListener('load', function() {
    if (this.window.innerWidth < 768) {
        navLinks.classList.toggle('hide');
        // navLinks.classList.add('active');
    }
});

// HANDLE WINDOW RESIZE STATE
this.window.addEventListener('resize', function() {
    if (this.window.innerWidth <= 768) {
        hamburger.style.display = 'block';
        close.style.display = 'none';
    }
    else if (!navLinks.classList.contains('active')) {
        hamburger.style.display = 'none';
        close.style.display = 'block';
    }
});

// HAMBURGER STATE
function toggleMenu() {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        hamburger.style.display = 'none';
        close.style.display = 'block';
    } else {
        hamburger.style.display = 'block';
        close.style.display = 'none';
    }
};

// TAP ON SCREEN TO HIDE NAVIGATION ON MOBILE
this.window.addEventListener('scroll', function() {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.style.display = 'block';
        close.style.display = 'none';
    }
});