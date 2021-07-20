if (document.querySelector('.swiper-milestones')) {
    const swiperMilestones = new Swiper('.swiper-milestones', {

        loop: false,
        // If we need pagination
        // Navigation arrows
        navigation: {
            nextEl: '.milestones-next',
            prevEl: '.milestones-prev',
        },
        breakpoints: {
            320: {
               slidesPerView: 1.6, 
            },
            480: { 
                slidesPerView: 2, 
            },
            1024: {
                slidesPerView: 3, 
            },
            1600: {
                slidesPerView: 4,
            }
        } 
    });
}

if (document.querySelector('.swiper-forming')) {
    const swiperForming = new Swiper('.swiper-forming', {
        // autoHeight: true,
        loop: true,
        grabCursor: true,
        // If we need pagination
        pagination: {
            el: '.forming-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.forming-next',
            prevEl: '.forming-prev',
        }
    });
}

if (document.querySelector('.swiper-cases')) {
    const swiperCases = new Swiper('.swiper-cases', {
        speed: 400,
        spaceBetween: 15,
        slidesPerView: 1.2,
        centeredSlides: true,
        grabCursor: true,
        loop: true,

        breakpoints: {
            768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 55,
            },
            1440: {
                slidesPerView: 3,
                loop: false,
                spaceBetween: 55,
                allowTouchMove: false,
            }
        },
        // If we need pagination
        pagination: {
            el: '.cases-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.cases-next',
            prevEl: '.cases-prev',
        },
    });
}
 
    if (document.querySelector('.homepage .swiper-partners')) {  
  
        const swiperPartners = new Swiper('.homepage .swiper-partners', {  
            slidesPerView: '2',
            spaceBetween: 10,
            grabCursor: true,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 0, 
                disableOnInteraction:false
            }, 
            breakpoints: {
                560: {
                    slidesPerView: '3',
                },
                768: {
                    slidesPerView: 'auto', 
                }, 
            }, 
            // Navigation arrows
            navigation: {
                nextEl: '.partners-next',
                prevEl: '.partners-prev',
            }
        });
    }  
 
    if (document.querySelector('.partners--press .swiper-partners')) {
        const swiperPartners = new Swiper('.partners--press .swiper-partners', { 
            
            slidesPerView: '2',
            spaceBetween: 10,
            grabCursor: true,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 0, 
                disableOnInteraction:false
            }, 
            breakpoints: {
                560: {
                    slidesPerView: '3',
                },
                768: {
                    slidesPerView: 'auto', 
                }, 
            }, 
            // Navigation arrows
            navigation: {
                nextEl: '.partners-next',
                prevEl: '.partners-prev',
            }
        });
    }  
 


if (document.querySelector('.swiper-latest-updates')) {
    const swiperLatestUpdates = new Swiper('.swiper-latest-updates', {
        speed: 400,
        spaceBetween: 15,
        slidesPerView: 1.2,
        centeredSlides: true,
        grabCursor: true,
        loop: true, 
        breakpoints: {
            768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 35,
            },
            1260: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 32,
            }
        },
        pagination: {
            el: '.latest-updates-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.latest-updates-next',
            prevEl: '.latest-updates-prev',
        },
    });
}

if (document.querySelector('.swiper-news-slider')) {
    const swiperNewsSlider = new Swiper('.swiper-news-slider', {
        speed: 400,
        spaceBetween: 15,
        slidesPerView: 1.2,
        centeredSlides: true,
        loop: true,
        grabCursor: true,

        breakpoints: {
            768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 35,
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 32,
            }
        },
        pagination: {
            el: '.news-slider-pagination',
        },

        navigation: {
            nextEl: '.news-slider-next',
            prevEl: '.news-slider-prev',
        },
    });
}

if (document.querySelector('.investors-swiper')) {

    const swiperInvestors = new Swiper('.investors-swiper', {

        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 3000,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                spaceBetween: 50,
            },
            1440: {
                spaceBetween: 100,
            }
        }
    })
}