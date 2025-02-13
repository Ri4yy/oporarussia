document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'); 

    function updateHeaderClass() {
        const activeSlide = document.querySelector('.swiper-banner .swiper-slide-active');
        if (activeSlide) {
            if (activeSlide.dataset.status === 'dark') {
                header.classList.add('header--light');
            } else {
                header.classList.remove('header--light');
            }
        }
    }

    const swiperBanner = new Swiper('.swiper-banner', {
        enabled: true,
        slidesPerView: 1,
      
        pagination: {
          el: '.swiper-banner__pagination',
        },
      
        navigation: {
          nextEl: '.swiper-banner__btn-next',
          prevEl: '.swiper-banner__btn-prev',
        },

        on: {
			slideChangeTransitionEnd: updateHeaderClass,
		},
    });
    updateHeaderClass();
})