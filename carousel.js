const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".arrow.left");
const next = document.querySelector(".arrow.right");

let index = 0;

function showSlide(newIndex) {
    slides[index].classList.remove("active");
    slides[index].classList.add("exit");

    index = newIndex;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides[index].classList.remove("exit");
    slides[index].classList.add("active");

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
