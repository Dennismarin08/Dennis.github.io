let slideIndex = 0;
const slides = document.querySelectorAll(".carrusel-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicadores = document.querySelector(".carrusel-indicadores");

// Crear puntos (indicadores)
slides.forEach((_, i) => {
  const span = document.createElement("span");
  span.addEventListener("click", () => showSlide(i));
  indicadores.appendChild(span);
});

const dots = indicadores.querySelectorAll("span");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
    dots[i].classList.toggle("active", i === index);
  });
  slideIndex = index;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Iniciar
showSlide(slideIndex);

// Autoplay cada 5s
let autoplay = setInterval(nextSlide, 5000);

// Pausar autoplay al pasar el mouse
document.querySelector(".carrusel").addEventListener("mouseenter", () => {
  clearInterval(autoplay);
});
document.querySelector(".carrusel").addEventListener("mouseleave", () => {
  autoplay = setInterval(nextSlide, 5000);
});
