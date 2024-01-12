let currentSlide = 0;

function showSlide(index) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const slides = document.querySelectorAll('.swiper-slide');
  const slideWidth = slides[0].offsetWidth;

  currentSlide = index;

  swiperWrapper.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  const slides = document.querySelectorAll('.swiper-slide');
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}
