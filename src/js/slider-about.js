const swiperMilestones = new Swiper('.swiper-milestones', {
 
    loop: false, 
    // If we need pagination
    pagination: {
      el: '.forming-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.forming-next',
      prevEl: '.forming-prev',
    },
    breakpoints: { 
        320: {
          slidesPerView: 1.5,
          
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