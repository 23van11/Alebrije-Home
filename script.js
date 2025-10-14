document.addEventListener('DOMContentLoaded', function () {
  // Slider para galería
  const gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.gallery-swiper .swiper-button-next',
      prevEl: '.gallery-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.gallery-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 },
    }
  });

  // Slider para habitaciones
  const roomsSwiper = new Swiper('.rooms-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.rooms-swiper .swiper-button-next',
      prevEl: '.rooms-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.rooms-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      600: { slidesPerView: 1 },
      900: { slidesPerView: 2 },
    }
  });
});
