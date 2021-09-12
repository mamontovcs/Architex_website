$(function () {

    /*Fixed header*/
    let header = $("#header");
    let intro = $("#intro");
    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(introHeight, scrollPos);

    $(window).on("scroll  resize", function () {

        introHeight = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(introHeight, scrollPos);

    });

    function checkScroll(introHeight, scrollPos) {

        if (scrollPos > introHeight) {
            header.addClass("fixed");

        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);

    });

    navToggle.on("click", function (event) {

        event.preventDefault();
        nav.toggleClass("show");

    });

    let slider = $("#reviewsSlider");


    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    new SimpleAdaptiveSlider('.slider', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
});
