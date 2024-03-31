document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () => {
        console.log("Menu button clicked");
        navbar.classList.toggle('active');
    }
});