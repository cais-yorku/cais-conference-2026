// Slideshow functionality for auto-playing images
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

console.log('Slideshow initialized with', totalSlides, 'slides');

function showSlide(n) {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide = n;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    console.log('Showing slide', currentSlide);
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function goToSlide(n) {
    showSlide(n);
}

// Auto-advance slides every 4 seconds
let slideInterval = setInterval(showNextSlide, 2000);
console.log('Auto-slide started, changing every 4 seconds');

// Optional: Pause on hover
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
    console.log('Slideshow paused on hover');
});

slideshowContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(showNextSlide, 4000);
    console.log('Slideshow resumed');
});