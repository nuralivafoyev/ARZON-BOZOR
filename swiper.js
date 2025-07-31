var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // ✅ Responsive breakpoints
  breakpoints: {
    // ≥ 1024px
    1024: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    // ≥ 768px va < 1024px
    768: {
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 80,
        modifier: 1,
        slideShadows: true,
      },
    },
    // < 768px (mobil)
    0: {
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows: false,
      },
    },
  }
});
