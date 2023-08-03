$(document).ready(function () {

    $('.btn-menu').on('click', function (event) {
        event.stopPropagation();
        $('.navbar, .btn-menu, body').toggleClass('active');
    });
    $('[data-category-btn]').on('click', function (event) {
        $(this).toggleClass('active');
        var categoryBtn = $(this).attr('data-category-btn');
        $('[data-category-content="' + categoryBtn + '"]').slideToggle();
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.navbar').length && !$(event.target).hasClass('btn-menu')) {
            $('.navbar, .btn-menu, body').removeClass('active');
        }
    });

    if ($(window).width() < 768) {
        $('table').each(function () {
            $(this).wrap('<div class="table-container"></div>');
        });
    }

    $('tbody input[type="checkbox"]').on('click', function () {
        $(this).closest('tr').toggleClass('active');
    });

    $('[data-tabBtn]').click(function () {
        var tabBtnValue = $(this).attr('data-tabBtn');
        $('[data-tabContent="' + tabBtnValue + '"]').addClass('active');
        $('[data-tabContent]').not('[data-tabContent="' + tabBtnValue + '"]').removeClass('active');
        $('[data-tabBtn]').removeClass('active');
        $(this).addClass('active');
    });


    $('thead input[type="checkbox"]').on('click', function () {
        var isChecked = $(this).prop('checked');
        $('tbody tr').toggleClass('active', isChecked);
        $('tbody input[type="checkbox"]').prop('checked', isChecked);
    });

    $('.dropdown-btn').click(function () {
        var $dropdown = $(this).parent('.dropdown');
        var $content = $(this).next('.dropdown-content');
        $dropdown.removeClass('show')
        if ($dropdown.hasClass('active')) {
            $dropdown.removeClass('active');
            $content.slideUp(200);
        } else {
            $('.dropdown.show').removeClass('show');
            $('.dropdown.active').removeClass('active');
            $('.dropdown-content').slideUp(200);
            $dropdown.addClass('active');
            $content.slideDown(200);
        }
    });

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

        $('.modal-cancel').on('click', () => {
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




});


