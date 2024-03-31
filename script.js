let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    console.log("Menu button clicked");
    navbar.classList.toggle('active');
}