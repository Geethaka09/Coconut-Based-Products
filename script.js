const navbar = document.querySelector('.navbar');
const menuBtn = document.getElementById('#menu-btn');

document.querySelector('#menu-btn').onclick = () => {
    console.log("Menu button clicked");
    navbar.classList.toggle('active');
}