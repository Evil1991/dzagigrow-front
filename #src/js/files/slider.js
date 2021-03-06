'use strict';


/// сладер на главной с товарами
document.addEventListener("DOMContentLoaded",()=> {
	const SLIDER_NAME = 'slider-index';
	const SLIDER_CLASS = '.' + SLIDER_NAME;

	if (document.querySelector(SLIDER_CLASS) !== null) {
		const SLIDER_SETTINGS = {
			init: true,
			loop: true,
			loopedSlides: 0,
			grabCursor: true,
			// autoplay: {
			// 	delay: 5000,
			// 	pauseOnMouseEnter: true
			// },
			navigation: {
				nextEl: '.js-' + SLIDER_NAME + '-next',
				prevEl: '.js-' + SLIDER_NAME + '-prev',
				disabledClass: SLIDER_NAME + '__navigation-item_disabled'
			},
			pagination: {
				bulletClass: SLIDER_NAME +'__pagination-item',
				bulletActiveClass: SLIDER_NAME +'__pagination-item_active',
				clickable: true,
				clickableClass:  SLIDER_NAME +'__pagination-item_clickable',
				el: '.' + SLIDER_NAME +'__pagination'
			},
			preloadImages: false,
			slidesPerView: 1,
			spaceBetween: 16,
			freeMode: false,
			containerModifierClass: SLIDER_NAME +'_',
			wrapperClass: SLIDER_NAME + '__wrapper',
			slideClass: SLIDER_NAME + '__item',
			slideActiveClass: SLIDER_NAME + '__item_active',
			slideDuplicateActiveClass: SLIDER_NAME + '__item_duplicate_active',
			slideVisibleClass: SLIDER_NAME + '__item_visible',
			slideDuplicateClass: SLIDER_NAME + '__item_duplicate',
			breakpoints: {}
		};
		window.swiper(SLIDER_CLASS, SLIDER_SETTINGS);
	}
});
window.slider = window.swiper = function(sliderSelector, sliderSettings) {
	if (document.querySelector(sliderSelector) !== null) {
		let slider = new Swiper(sliderSelector, sliderSettings);
		return slider;
	}
};
window.swiperThumbs = function(sliderSelector, sliderSettings) {
	if (document.querySelector(sliderSelector) !== null) {
		let slider = new Swiper(sliderSelector, sliderSettings);
		return slider;
	}
};


/// слайдер с отзывами
document.addEventListener("DOMContentLoaded",()=> {
    const SLIDER_NAME = 'testimonials';
    const SLIDER_CLASS = '.' + SLIDER_NAME;

    if (document.querySelector(SLIDER_CLASS) !== null) {
        const SLIDER_SETTINGS = {
            init: true,
            loop: true,
            loopedSlides: 0,
            grabCursor: true,
            // autoplay: {
            // 	delay: 5000,
            // 	pauseOnMouseEnter: true
            // },
            navigation: {
                nextEl: '.js-' + SLIDER_NAME + '-next',
                prevEl: '.js-' + SLIDER_NAME + '-prev',
                disabledClass: SLIDER_NAME + '__navigation-item_disabled'
            },
            pagination: {
                bulletClass: SLIDER_NAME +'__pagination-item',
                bulletActiveClass: SLIDER_NAME +'__pagination-item_active',
                clickable: true,
                clickableClass:  SLIDER_NAME +'__pagination-item_clickable',
                el: '.' + SLIDER_NAME +'__pagination'
            },
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 24,
            freeMode: false,
            containerModifierClass: SLIDER_NAME +'_',
            wrapperClass: SLIDER_NAME + '__wrapper',
            slideClass: SLIDER_NAME + '__item',
            slideActiveClass: SLIDER_NAME + '__item_active',
            slideDuplicateActiveClass: SLIDER_NAME + '__item_duplicate_active',
            slideVisibleClass: SLIDER_NAME + '__item_visible',
            slideDuplicateClass: SLIDER_NAME + '__item_duplicate',
            breakpoints: {}
        };
        window.swiper(SLIDER_CLASS, SLIDER_SETTINGS);
    }
});

/// слайдер "c этим товаром покупают"
document.addEventListener("DOMContentLoaded",()=> {
    const SLIDER_NAME = 'also-buy-slider';
    const SLIDER_CLASS = '.' + SLIDER_NAME;

    if (document.querySelector(SLIDER_CLASS) !== null) {
        const SLIDER_SETTINGS = {
            init: true,
            loop: true,
            loopedSlides: 0,
            grabCursor: true,
            // autoplay: {
            // 	delay: 5000,
            // 	pauseOnMouseEnter: true
            // },
            navigation: {
                nextEl: '.js-' + SLIDER_NAME + '-next',
                prevEl: '.js-' + SLIDER_NAME + '-prev',
                disabledClass: SLIDER_NAME + '__navigation-item_disabled'
            },
            pagination: {
                bulletClass: SLIDER_NAME +'__pagination-item',
                bulletActiveClass: SLIDER_NAME +'__pagination-item_active',
                clickable: true,
                clickableClass:  SLIDER_NAME +'__pagination-item_clickable',
                el: '.' + SLIDER_NAME +'__pagination'
            },
            preloadImages: false,
            slidesPerView: 4,
            spaceBetween: 24,
            freeMode: false,
            containerModifierClass: SLIDER_NAME +'_',
            wrapperClass: SLIDER_NAME + '__wrapper',
            slideClass: SLIDER_NAME + '__item',
            slideActiveClass: SLIDER_NAME + '__item_active',
            slideDuplicateActiveClass: SLIDER_NAME + '__item_duplicate_active',
            slideVisibleClass: SLIDER_NAME + '__item_visible',
            slideDuplicateClass: SLIDER_NAME + '__item_duplicate',
            breakpoints: {}
        };
        window.swiper(SLIDER_CLASS, SLIDER_SETTINGS);
    }
});

