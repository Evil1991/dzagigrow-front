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


    /**
     * Кнопки плюс минус
     */

    // Убавляем кол-во по клику
    $('.quantity_inner .bt_minus').click(function () {
        let $input = $(this).parent().find('.quantity');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
    });
    // Прибавляем кол-во по клику
    $('.quantity_inner .bt_plus').click(function () {
        let $input = $(this).parent().find('.quantity');
        let count = parseInt($input.val()) + 1;
        count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
        $input.val(parseInt(count));
    });
    // Убираем все лишнее и невозможное при изменении поля
    $('.quantity_inner .quantity').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        if (this.value == "") {
            this.value = 1;
        }
        if (this.value > parseInt($(this).data('max-count'))) {
            this.value = parseInt($(this).data('max-count'));
        }
    });

    /**
     * Фильтры
     */
    $('.catalog__filter-header').on('click', function () {
        let parent = $(this).closest('.catalog__filter-item');
        $(parent).toggleClass('catalog__filter-item--active');
    })
})

/**
 * Range slider
 */
if (document.querySelector(".slider-track") !== null) {
    window.onload = function(){
        slideOne();
        slideTwo();
    }

    let sliderOne = document.getElementById("slider-1");
    let sliderTwo = document.getElementById("slider-2");
    let displayValOne = document.getElementById("range1");
    let displayValTwo = document.getElementById("range2");
    let minGap = 0;
    let sliderTrack = document.querySelector(".slider-track");
    let sliderMaxValue = document.getElementById("slider-1").max;

    function slideOne(){
        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.value = sliderOne.value;
        fillColor();
    }
    function slideTwo(){
        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.value = sliderTwo.value;
        fillColor();
    }
    function fillColor(){
        let percent1 = (sliderOne.value / sliderMaxValue) * 100;
        let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #00aa2e ${percent1}% , #00aa2e ${percent2}%, #dadae5 ${percent2}%)`;
    }

    displayValOne.addEventListener('input', function() {
        sliderOne.value = this.value;
        fillColor()
    })
    displayValTwo.addEventListener('input', function() {
        sliderTwo.value = this.value;
        fillColor()
    })
}

