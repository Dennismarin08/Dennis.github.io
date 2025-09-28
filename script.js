// Efecto de tipeo animado
const typedText = document.getElementById("typed");
const textArray = ["Desarrollador Web", "Programador PHP", "Creador de Proyectos"];
/* ===== MENÚ RESPONSIVE ===== */
const navToggle = document.createElement("div");
navToggle.classList.add("nav-toggle");
navToggle.innerHTML = "&#9776;"; // ☰
document.querySelector("header").appendChild(navToggle);

const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ===== ANIMACIONES SCROLL ===== */
const faders = document.querySelectorAll("section, .card, .servicio, .testimonio");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* ===== CARRUSEL DE TESTIMONIOS ===== */
const testimoniosContainer = document.querySelector(".testimonios-container");
let scrollAmount = 0;

function autoScrollTestimonios() {
  if (testimoniosContainer.scrollWidth > testimoniosContainer.clientWidth) {
    scrollAmount += 320; // ancho aprox. de cada card
    if (scrollAmount >= testimoniosContainer.scrollWidth) {
      scrollAmount = 0; // reinicia al inicio
    }
    testimoniosContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }
}

// Cambia cada 4 segundos
setInterval(autoScrollTestimonios, 4000);

/* ===== BOTÓN IR ARRIBA ===== */
const btnTop = document.createElement("div");
btnTop.innerHTML = "⬆";
btnTop.classList.add("btn-top");
document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.classList.add("visible");
  } else {
    btnTop.classList.remove("visible");
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 1.2;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < trigger) card.classList.add('show');
  });
});

let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[index].length) {
    typedText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Interactividad para mostrar precios
document.querySelectorAll('.btn-precio').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = btn.closest('.price-card');
    const precioDiv = card.querySelector('.precio');
    if (precioDiv.style.display === "none" || precioDiv.style.display === "") {
      precioDiv.textContent = "Precio: $" + card.dataset.precio + " COP";
      precioDiv.style.display = "block";
      btn.textContent = "Ocultar precio";
    } else {
      precioDiv.style.display = "none";
      btn.textContent = "Ver precio";
    }
    
  });
});
