
		function addScript(path ,stimeout,id){  
            if(localStorage.getItem(path)) {
              stimeout=1; 
            }  
            const someJs = document.createElement('script'); 
            someJs.async=true;
            someJs.src=path;  
                    if(id){
                        someJs.id=id;	
                    } 
            setTimeout(() => {
              body.appendChild(someJs);   
            localStorage.setItem(path , true);
          }, stimeout);     
              return ( 
                  someJs 
              ) 
        }   
        console.dir(this);
        window.addEventListener('load', function(){   
        const mediaQuery2 = window.matchMedia('(max-width: 480px)').matches;  
        let swiperLoadingDelay=1; 
        const swipDelay = document.querySelector('.swiper-delay_js'); 
        if(swipDelay){ 
          const addtime= parseInt(swipDelay.dataset.time);
          if(addtime>0){
            swiperLoadingDelay=1+ addtime/5;
            if (mediaQuery2) {
              swiperLoadingDelay =addtime;
            } 
              addScript(templateUrl+'/newassets/js/swiper.min.js' , swiperLoadingDelay).addEventListener('load',()=>{
                addScript(templateUrl+'/newassets/js/sliders.js' , 1); 
              }) 
             
          }  
        };  
            let postjs = 8000;
            if(document.querySelector('.open-roles')||document.querySelector('#Position')){
                console.log(1);
            }
              addScript('//js.hs-scripts.com/6856639.js' , 1000 , 'hs-script-loader'); 
                addScript(templateUrl+'/build/bundle.js' , 1000);  
        }) 