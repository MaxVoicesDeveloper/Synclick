 const swiper = new Swiper('.swiper', {
    kayboard: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
    slideChange: function () {
      const bullets = this.pagination.bullets;
      const activeIndex = this.realIndex;
      bullets.forEach(b => {
        b.classList.remove('prev', 'next');
      });
      if (bullets[activeIndex - 1]) {
        bullets[activeIndex - 1].classList.add('prev');
      }
      if (bullets[activeIndex + 1]) {
        bullets[activeIndex + 1].classList.add('next');
      }
    }
  },
    breakpoints: {
    320: {
      slidesPerView: 1
    },
    1024:{
      slidesPerView: 2
    },
    1400: {
      slidesPerView: 3
    }
  }
  });
