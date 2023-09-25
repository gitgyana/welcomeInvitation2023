// script.js
const flap = document.getElementById("flap");
const fullImage = document.getElementById("fullImage");

let isOpen = false;

flap.addEventListener("click", () => {
    if (!isOpen) {
        fullImage.style.display = "block";
        isOpen = true;
    }
});

window.addEventListener("scroll", () => {
    if (isOpen) {
        fullImage.style.display = "none";
        isOpen = false;
    }
});
