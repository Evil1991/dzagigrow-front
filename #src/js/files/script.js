$(document).ready(function() {
    $('.header__catalog-btn').on('click', function() {
        $(this).toggleClass('header__catalog-btn--active')
        $('body').toggleClass('catalog--active')
    })
})

