body=document.querySelector("body");
html=document.querySelector("html");
header=document.querySelector("header");
btnMenu=document.querySelector(".btn-menu");

window.onload= function(){
  pagescroll(); 
}

// мобильное меню
nav = document.querySelector(".nav");
document.querySelector(".btn-menu").addEventListener("click" , togglenav);
document.querySelector(".nav-menu").onclick = closenav;

document.querySelector(".nav-background").onclick = closenav;
function closenav(){
  nav.classList.remove("nav-open");
  btnMenu.style.marginRight="0";
  showscroll();
  
}
function togglenav() {
  nav.classList.toggle("nav-open");
if(nav.classList.contains("nav-open")){
  btnMenu.style.marginRight=window.innerWidth-html.offsetWidth +"px";
  hidescroll();
  
} else {
  showscroll();
  btnMenu.style.marginRight="0";
}
}
// мобильное меню


// отключить прокрутку
function hidescroll(){
  body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
  body.style.overflow="hidden";
}

function showscroll(){
  body.style.paddingRight=0;
  body.style.overflow="visible"
}

let scrolid = 0 ;
function togglescroll(){
  if (scrolid==0){
    body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
    body.style.overflow="hidden";
    scrolid=1;
  } else{
    body.style.paddingRight=0;
    body.style.overflow="visible"
    scrolid=0;
  }
}

// отключить прокрутку

 




 // Появление меню при прокрутке 
function pagescroll(){
  header.classList.add("fixed-header"); //меняем хедер со статика на фиксед только после загрузки страници
  hplace=document.querySelector(".header-place"); // вместо падинга на боди используем пустой блок
  let headerheight=header.offsetHeight+"px"; //получаем текущую высоту хедера
  hplace.style.height=headerheight;  //задаем пустому блоку высоту хедера
  window.addEventListener('resize', function(event){
    if(headerheight!==header.offsetHeight+"px"){
   //меняем высоту пустого блока только если изменилась высота хедера
      headerheight=header.offsetHeight+"px";
      hplace.style.height=headerheight;
    }
  });

  let pscroll = 0;
  window.addEventListener('scroll', function() { 
      if (pscroll<pageYOffset&pageYOffset>header.offsetHeight){
               header.style.transform="translateY(-100%)"; //прячем хедер при прокрутке вниз            
       }else { 
            header.style.transform="none"; //показываем хедер при прокрутке вверх        
       }  
   pscroll=pageYOffset;
 });
}

 //Появление меню при прокрутке






//отправка формы  
// let form = document.querySelectorAll('.order-form');

// const modal = document.getElementById("modal");

// function ajaxform(evt) {
//   gtag('event', 'submit', {
//     'event_category': 'Form'
//   });
//   evt.preventDefault();
//   let formstatus = this.querySelector('.formstatus');
//   formstatus.innerHTML = '<class="load-form">Соедиенеие ...';

//   let formData = {
//     desc: this.querySelector('input[name="description"]').value,
//     name: this.querySelector('input[name="name"]').value,

//     phone: this.querySelector('input[name="phone"]').value

//   };
//   console.log(formData);
//   let request = new XMLHttpRequest();

//   request.addEventListener('load', function () {

//     formstatus.innerHTML = 'Ваша заявка успешно отправлена, ожидайте звонка';

//   });

//   request.open('POST', '/mail.php', true);
//   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//   request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone) + '&desc=' + encodeURIComponent(formData.desc));


// };



// for (i = 0; i < form.length; i++) {
//   form[i].addEventListener('submit', ajaxform);
// } 
//отправка формы

// accordion
  
      function accordionInit (parent) {
        window.addEventListener("load", function () {
          const accordion = document.querySelector(parent);
          if(accordion){
            const items = accordion.querySelectorAll(".accordion__item"); 
            const titles = accordion.querySelectorAll(".accordion__item .accordion__title");
            console.log('2');
            for (let i = 0; i < items.length; i++) {    
              
              titles[i].addEventListener('click', function(){ 
               
                if(this.classList.contains('is-active__js')){
                  return '';
                }
                    for (let i = 0; i < titles.length; i++) {
                      titles[i].classList.remove('is-active__js'); 
                    }
                   
                       this.classList.add('is-active__js');
                   
               
              });
            } 
          } 
        });
      } 
        accordionInit('.accordion-health')
    
// accordion

 //dropdown

function dropdown() {
  const drop = document.querySelector(".dropdown__activator");
  drop.addEventListener("click", function () {
    drop.classList.toggle("dropdown_open");
  });
}

try {
  dropdown();
} catch (e) {
  console.log(e);
}
//dropdown


// toggle min-img 
    function fullQuality(item){ 
      const priority  = item.dataset.priority||0;
      setTimeout(function() {
      const webp = item.querySelector('.webp-img');
      const noWebp = item.querySelector('.nowebp-img');
      const fullWebp = webp.dataset.img;
      const fullNoWebp = noWebp.dataset.img;  
        webp.srcset=fullWebp; 
        noWebp.src=fullNoWebp;
      }, 1+300*priority);
    }
    function toggleMinImg(){ 
        const pictures = document.querySelectorAll('.toggle-img--js');  
        for (let i = 0; i < pictures.length; i++) {
          const pic = pictures[i]; 
          fullQuality(pic );  
        } 
    } 
toggleMinImg();
// toggle min-img 

//swiper
if (document.querySelector('.swiper-forming')) {
    const swiperForming = new Swiper('.swiper-forming', {
    autoHeight: true,
    loop: true, 
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

    breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 45,
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

if (document.querySelector('.swiper-partners')) {
const swiperPartners = new Swiper('.swiper-partners', {

    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 3000,
    loop: true, 
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    // If we need pagination
    breakpoints: {
      1024: {
        spaceBetween: 0,
        loop: false, 
        allowTouchMove: false,
      }
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
      el: '.latest-updates-pagination',
    },

    navigation: {
      nextEl: '.latest-updates-next',
      prevEl: '.latest-updates-prev',
    },
  });
}

if (document.querySelector('.swiper-news-slider')) {
  const swiperLatestUpdates = new Swiper('.swiper-news-slider', {
    speed: 400,
    spaceBetween: 15,
    slidesPerView: 1.2,
    centeredSlides: true,

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