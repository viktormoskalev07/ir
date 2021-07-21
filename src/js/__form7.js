


window.addEventListener('load', function(){
 const formParent = document.querySelector('.form__block'); 
 document.addEventListener( 'wpcf7beforesubmit', function( event ) {
    formParent.classList.add('form-submitting-process');
    setTimeout(() => {
        formParent.classList.remove('form-submitting-process');
    }, 800);
}, false );
    document.addEventListener( 'wpcf7submit', function( event ) {
        formParent.classList.add('form-was-submitted');
    }, false ); 
})

window.addEventListener('load', function(){
console.dir(this);
})