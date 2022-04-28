$(document).ready(function() {

    $('.header__catalog-btn').on('click', function() {
        $(this).toggleClass('header__catalog-btn--active')
        $('body').toggleClass('catalog--active')
    })

    $('.header__sign-in').click(function(){
        $.fancybox.open({
            src: '.sign-in-modal',
            type: 'inline'
        });
    });

    $('.header__sign-up').click(function(){
        $.fancybox.open({
            src: '.sign-up-modal',
            type: 'inline'
        });
    });

})

