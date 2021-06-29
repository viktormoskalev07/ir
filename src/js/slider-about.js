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