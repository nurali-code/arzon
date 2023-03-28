
$('.categories__heading').on('click', function () {
    $('.categories-list').removeClass('active');
    $('.categories__heading').next().removeClass('active');
    $(this).parent('.categories-list').toggleClass('active');
    $(this).next().addClass('active');
})


$('.btn-save, .navbar__link').on('click', function () {
    $(this).toggleClass('active')
})

/*---------------------------------------------------end*/

const TOP_OFFEST = $('header').outerHeight();
$(window).scroll(function () {
    if ($(window).scrollTop() >= (TOP_OFFEST + 10)) {
        $('body').css('paddingTop', TOP_OFFEST);
        $('header').addClass('fixed');
    }
    else {
        $('body').css('paddingTop', '0');
        $('header, body').removeClass('fixed')
    };

});

/*---------------------------------------------------end*/

$('.dropdown-btn, .header-catalog__heading').on('click', function () {
    // if (window.innerWidth <= 1100) {
    $(this).toggleClass('active')
    $(this).next().slideToggle(200)
    // } else { $(this).next().slideDown(200) }
});

/*---------------------------------------------------end*/

if ($('div').hasClass('main-slider')) {
    $('.main-slider').slick({
        infinite: false,
        variableWidth: true,
        centerMode: true,
        speed: 300,
        dots: false,
        slidesToShow: 1,
    });
}
if ($('div').hasClass('catalog-items')) {
    $('.catalog-items').slick({
        infinite: false,
        variableWidth: true,
        speed: 300,
        dots: false,
        swipeToSlide: true,
        slidesToShow: 7,
        responsive: [
            {
                breakpoint: 1100,
                settings: "unslick"
            }
        ]
    });
}

if ($('div').hasClass('card-img')) {
    $('.card-slider').slick({
        infinite: false,
        speed: 300,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        slidesToShow: 1,
        asNavFor: '.card-nav',
        touchThreshold: 9,
        fade: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    fade: false,
                    infinite: true,
                }
            }
        ]
    });
    $('.card-nav').slick({
        vertical: true,
        infinite: false,
        draggable: true,
        swipeToSlide: () => {
            $('.card-nav-slide').lenght >= 4 ? ret = true : ret = false;
            return ret;
        },
        dots: false,
        focusOnSelect: true,
        verticalSwiping: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.card-slider',
        responsive: [
            {
                breakpoint: 1100,
                settings: "unslick"
            }
        ]
    });
}

/*---------------------------------------------------end*/

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})

