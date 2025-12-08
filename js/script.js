console.log("Welcome to my Homepage!");

let button = document.querySelector(".button");
let hobbies = document.querySelector(".hobbies");
let image = document.querySelector(".image");
let gallery = document.querySelector(".gallery");
let venice = document.querySelector(".venice");
let basilica = document.querySelector(".basilica");

button.addEventListener("click", () => {
    if (hobbies.style.display === "none") {
        hobbies.style.display = "block";
    } else {
        hobbies.style.display = "none";
    }
});

image.addEventListener("click", () => {
    gallery.remove();
    venice.remove();
    basilica.remove();
})

const theme = document.querySelector("#themeToggle");
const body = document.querySelector('body');

theme.addEventListener("click", () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        theme.textContent = '☀️';
    } else {
        theme.textContent = '🌙';
    }
});