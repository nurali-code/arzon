
$('.btn-menu').on('click', () => {
    $('header, body').toggleClass('active');
    $('body').prepend("<div class='overlay'></div>");
})

$('.item-fav, .navbar__link').on('click', function () {
    $(this).toggleClass('active')
})

/*---------------------------------------------------end*/

$(window).scroll(function () {
    if ($(window).scrollTop() >= 104) $('header, body').addClass('fixed');
    else $('header, body').removeClass('fixed');
    // if ($(window).offset().top) { $('header, .navbar').addClass('anim'); }
    // else { $('header, .navbar').removeClass('anim') }
});

/*---------------------------------------------------end*/

if ($('div').hasClass('main-slider')) {
    $('.main-slider').slick({
        dots: true,
        infinite: false,
        variableWidth: true,
        centerMode: true,
        speed: 300,
        dots: false,
        slidesToShow: 1,
        nextArrow: "<button type='button' class='slick-next slick-arrow'><svg><use xlink:href='#arrow_right-2'></use></svg></button>",
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><svg><use xlink:href='#arrow_right-2'></use></svg></button>",
    });

}

/*---------------------------------------------------end*/

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})

