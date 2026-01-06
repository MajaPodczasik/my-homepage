const button = document.querySelector(".main__hobbiesButton");
const hobbies = document.querySelector("#hobbies");
const imageBtn = document.querySelector(".image");
const gallery = document.querySelector("#travel .gallery");
const venice = document.querySelector(".venice");
const basilica = document.querySelector(".basilica");

if (button && hobbies) {
    button.addEventListener("click", () => {
        const isHidden = getComputedStyle(hobbies).display === 'none';
        hobbies.style.display = isHidden ? 'block' : 'none';
        // update accessibility attributes
        button.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        hobbies.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
    });
}

if (imageBtn) {
    imageBtn.addEventListener("click", () => {
        if (gallery) gallery.remove();
        if (venice) venice.remove();
        if (basilica) basilica.remove();
    });
}

const theme = document.querySelector("#themeToggle");
const body = document.querySelector("body");

if (theme && body) {
    theme.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        theme.textContent = body.classList.contains("dark-theme") ? "☀️" : "🌙";
    });
}