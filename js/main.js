(function () {

    //Бургер 

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header .nav__link')

        if (!burgerIcon && !burgerNavLink || document.documentElement.clientWidth > 1100) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }



    // const swiperWhere = new Swiper('.where__swiper', {

    //     spaceBetween: 20,
    //     slidesPerView: 3,
    //     slidesPerGroup: 1,

    //     navigation: {
    //         prevEl: '.where__prev',
    //         nextEl: '.where__next',
    //     },

    //     breakpoints: {
    //         851: {
    //             slidesPerView: 4,
    //         },
    //     }

    // });

    // Слайдер со странами


    let swiperWhere = null;

    function initSwiperWhere() {
        if (window.innerWidth >= 701 && swiperWhere === null) {
            swiperWhere = new Swiper('.where__swiper', {
                spaceBetween: 20,
                slidesPerView: 3,
                slidesPerGroup: 1,

                navigation: {
                    prevEl: '.where__prev',
                    nextEl: '.where__next',
                },

                breakpoints: {
                    851: {
                        slidesPerView: 4,
                    },
                }
            });
        } else if (window.innerWidth < 701 && swiperWhere !== null) {
            swiperWhere.destroy(true, true);
            swiperWhere = null;
        }
    }

    window.addEventListener('load', initSwiperWhere);
    window.addEventListener('resize', initSwiperWhere);


}
)()


// Слайдер с отзывами


const swiperReviews = new Swiper('.reviews__swiper', {
    spaceBetween: 10,
    slidesPerView: 1.05,
    slidesPerGroup: 1,
    centeredSlidesBounds: true,
    centeredSlides: true,

    navigation: {
        prevEl: '.reviews__prev',
        nextEl: '.reviews__next',
    },
    on: {
        init: function () {
            setEqualHeight();
        },
        resize: function () {
            setEqualHeight();
        }
    },

    breakpoints: {
        451: {
            slidesPerView: 1.5,
            
        },
        701: {
            slidesPerView: 2,
            centeredSlidesBounds: false,
            centeredSlides: false,
            
        },
        1101: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        1601: {
            spaceBetween: 30,
        },
    }

});

function setEqualHeight() {
    const slides = document.querySelectorAll('.reviews__swiper .swiper-slide');
    slides.forEach(slide => slide.style.height = 'auto'); // сброс высоты

    let maxHeight = 0;
    slides.forEach(slide => {
        const height = slide.getBoundingClientRect().height;
        if (height > maxHeight) maxHeight = height;
    });

    slides.forEach(slide => {
        slide.style.height = maxHeight + 'px';
    });
}


 //Аккордеон

    const accordionList = document.querySelectorAll('.accordion-list')

    accordionList.forEach(el => {


        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpenedItem && accordionOpenedItem != accordionItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }

        })
    })




