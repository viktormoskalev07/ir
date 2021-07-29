function formActive() {
    const formParent = document.querySelector('.form__block');

    function thankOnForm() {
        formParent.classList.add('form-was-submitted');  
        const thankHtml = `   
        <div class="form__overlay__img"></div>
        <p class="form__overlay__thanks">Thanks for reaching out!</p>
        <div class="form__overlay__line"></div>
        <p class='form__overlay__willsoon'>A member of our team will be in touch soon</p>
         `;
        const thankDiv = document.createElement('div');
        thankDiv.className = 'form__overlay';
        thankDiv.innerHTML = thankHtml;
        thankDiv.style.opacity=0;
        formParent.append(thankDiv);
        setTimeout(() => {
            thankDiv.style.opacity=1;
        }, 500);
       
    }
    if (formParent) {
        window.addEventListener('load', function () {
           const inputCanged = document.querySelector('#checkbox-change-value input');
           if(inputCanged){
            inputCanged.value = 'yes';
           } 
            document.addEventListener('wpcf7beforesubmit', function () {
                formParent.classList.add('form-submitting-process');
                setTimeout(() => {
                    formParent.classList.remove('form-submitting-process');
                }, 800);
            }, false);
            document.addEventListener('wpcf7submit', function () { 
                    thankOnForm(); 
            }, false);
        });
    }  
}
formActive();