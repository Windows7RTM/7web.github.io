const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".arrow.left");
const next = document.querySelector(".arrow.right");

let index = 0;
let isAnimating = false;

function showSlide(newIndex) {
    if (isAnimating) return; // Prevent rapid clicking causing stacking
    isAnimating = true;

    // Exit current slide
    const prevSlide = slides[index];
    prevSlide.classList.remove("active");
    prevSlide.classList.add("exit");

    // Clean up exit class after transition completes
    setTimeout(() => {
        prevSlide.classList.remove("exit");
        isAnimating = false;
    }, 800); // Matches your CSS transition duration

    // Calculate new index
    index = newIndex;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    // Activate new slide
    slides[index].classList.remove("exit");
    slides[index].classList.add("active");

    // Update dots
    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

next.onclick = () => showSlide(index + 1);
prev.onclick = () => showSlide(index - 1);

dots.forEach(dot => {
    dot.onclick = () => showSlide(parseInt(dot.dataset.index));
});

// Auto-play
setInterval(() => showSlide(index + 1), 6000);