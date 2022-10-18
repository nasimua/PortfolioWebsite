let hamburger = document.querySelector(".hamburger");
let navBar = document.querySelector(".nav-bar");

hamburger.onclick = function() {
    hamburger.classList.toggle("active")
    navBar.classList.toggle("active")
}

document.querySelectorAll(".nav-bar").forEach(n => n.onclick = function() {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
})