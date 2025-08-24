function abrirCarta() {
  const sobre = document.querySelector('.sobre');
  const carta = document.getElementById('carta');
  const cancion = document.getElementById('cancion');

  sobre.classList.add('abierto');

  setTimeout(() => {
    sobre.style.display = 'none';
    carta.style.display = 'block';
    cancion.play();
  }, 1000);
}

function finalSorpresa() {
  document.getElementById('carta').style.display = 'none';
  document.getElementById('final').classList.remove('oculto');

  // Confeti casero 🎉
  for (let i = 0; i < 30; i++) {
    let confeti = document.createElement('div');
    confeti.innerHTML = "🎉";
    confeti.style.position = "absolute";
    confeti.style.left = Math.random() * window.innerWidth + "px";
    confeti.style.top = "-50px";
    confeti.style.fontSize = "24px";
    document.body.appendChild(confeti);

    let velocidad = Math.random() * 3 + 2;
    let intervalo = setInterval(() => {
      let top = parseFloat(confeti.style.top);
      confeti.style.top = top + velocidad + "px";
      if (top > window.innerHeight) {
        clearInterval(intervalo);
        confeti.remove();
      }
    }, 30);
  }
}
