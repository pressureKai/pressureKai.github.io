let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

setInterval(function() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalSlides; // Ñ­»·ÂÖ²¥
  slides[currentIndex].classList.add('active');
}, 3000);

