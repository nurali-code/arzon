
$('.btn-save, .navbar__link').on('click', function () {
    $(this).toggleClass('active')
})

/*---------------------------------------------------end*/
$('.menu__next').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
})

/*---------------------------------------------------end*/
$('.posting-catalog__link').on('click', function () {
    $(this).addClass('active')
    var catalogTab = $(this).data('catalog-tab');
    var catalog = $(this).parents('.posting-catalog-parent').find('.posting-catalog__link').not($(this)).removeClass('active')
    var catalog = $(this).parents('.posting-catalog-parent').next();
    var catalogId = catalog.find('[data-catalog-id="' + catalogTab + '"]');
    catalogId.show();
    catalog.find('[data-catalog-id]').not(catalogId).hide();
});
/*---------------------------------------------------end*/

$(".fileInput").change(function () {
    const files = this.files;
    for (let i = 0; i < files.length; i++) {
        const wrapper = $("<div>").addClass("posting-img");
        const newImg = $("<img>").attr("alt", "img");
        const removeBtn = $("<button>").text("✖");
        wrapper.append(newImg, removeBtn);
        $(this).parent().before(wrapper);
        previewSingleImage(files[i], newImg);
    }
});

$(document).on("click", ".posting-img button", function () {
    $(this).parent().remove();
});
function previewSingleImage(file, img) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        img.attr("src", reader.result);
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
}
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
    $(this).toggleClass('active')
    $(this).next().slideToggle(200)
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
/*---------------------------------------------------end*/

/*---------------------------------------------------end*/
function hideModals() {
    $('.modal').fadeOut();
    $('.modal, body, [data-modal]').removeClass('active');
};

$(function () {
    function showModal(id) {
        if ($(id).hasClass('active')) {
            $(id).fadeOut(300)
            $(id).removeClass('active');
            $('body').removeClass('active');
        } else {
            $(id).addClass('active')
            $('body').addClass('active');
            $(id).fadeIn(300);
        }
    }
    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        hideModals();
        $(this).toggleClass('active')
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close, .menu-catalog__close').on('click', () => {
        hideModals();
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.nav').length) ||
            ($(e.target).parents('.btn').length) ||
            ($(e.target).hasClass('nav')) ||
            ($(e.target).hasClass('btn-menu')) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('modal-content'))
        )) {
            hideModals();
        }
    });
});
