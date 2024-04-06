menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = function() {
    navBar=document.querySelector(".header .navbar");
    navBar.classList.toggle('active');
}