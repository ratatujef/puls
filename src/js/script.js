$(document).ready(function () {
    $('.carousel__slider').slick({
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"> <img src="../img/arrow_l.png" alt="prev" > </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="../img/arrow_r.png" alt="next" > </button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]

    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabItem_acive)', function () {
        $(this)
            .addClass('catalog__tabItem_acive').siblings().removeClass('catalog__tabItem_acive')
            .closest('section.catalog').find('div.catalog__tabContent').removeClass('catalog__tabContent_active').eq($(this).index()).addClass('catalog__tabContent_active');
    });
    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })
    $('.catalog-item__linkBack').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

});


