// CONTROL DE LA CARTA
const envelopeContainer = document.getElementById('envelopeContainer');

envelopeContainer.addEventListener('click', () => {
  envelopeContainer.classList.toggle('open');
});

// CONTROL DEL CARRUSEL DE FOTOS INFINITO (Cambia cada 5.5 segundos)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideDuration = 5500; // 5.5 segundos

function nextSlide() {
  // Ocultamos la diapositiva actual
  slides[currentSlide].classList.remove('active');
  
  // Siguiente índice (vuelve a 0 cuando llega al final)
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Mostramos la nueva diapositiva con efecto de fundido
  slides[currentSlide].classList.add('active');
}

// Inicializar el intervalo automático infinito
if (slides.length > 0) {
  setInterval(nextSlide, slideDuration);
}
