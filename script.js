const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 3) % 3;
    showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 3;
    showSlide(currentIndex);
});

showSlide(currentIndex);
