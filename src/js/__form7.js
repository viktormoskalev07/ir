function formActive() {
    const formParent = document.querySelector('.form__block');

    function thankOnForm() {
        const thankHtml = `   
        <div class="form__overlay__img"></div>
        <p class="form__overlay__thanks">Thanks for reaching out!</p>
        <div class="form__overlay__line"></div>
        <p class='form__overlay__willsoon'>A member of our team will be in touch soon</p>
         `;
        const thankDiv = document.createElement('div');
        thankDiv.className = 'form__overlay';
        thankDiv.innerHTML = thankHtml;
        formParent.append(thankDiv);
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
                formParent.classList.add('form-was-submitted');
                setTimeout(() => {
                    thankOnForm();
                }, 300);
            }, false);
        });
    } 
}
formActive();