'use strict';

(function() {


    const selectElement = function(elem) {
        return document.querySelector(elem);
    }

    let menuToggle = selectElement('.menu-toggle');
    let body = selectElement('body');

    menuToggle.addEventListener('click', function(){
        body.classList.toggle('open');
    });

// scroll;

    window.sr = ScrollReveal();
    sr.reveal('.animate-left', {
        origin: 'left',
        duration: 1000,
        distance: '25rem',
        delay: 300
    });

    sr.reveal('.animate-right', {
        origin: 'right',
        duration: 1000,
        distance: '25rem',
        delay: 300
    });

    sr.reveal('.animate-top', {
        origin: 'top',
        duration: 1000,
        distance: '25rem',
        delay: 300
    });
    sr.reveal('.animate-bottom', {
        origin: 'bottom',
        duration: 1000,
        distance: '25rem',
        delay: 300
    });


})();

