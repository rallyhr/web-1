(function ($) {
    "use strict";

    /*----------------------------------
   OWL CAROUSEL INIT
   ------------------------------------*/
   $('.testimonial-wrap').owlCarousel({
    items: 1,
    loop:true,
    autoplay: true,
    autoplayTimeout:3000,
    dots: true
});

$('.platform-carousel').owlCarousel({
    items: 1,
    loop:true,
    autoplay: true,
    dots: false,
    animateOut: 'fadeOut',
});
    /* =================================
            ===  Sticky Menu       ===
            =================================== */
    var header = $('.main-menu');
    var win = $(window);

    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 70) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });
    // Scroll Up
    $.scrollUp({
        scrollText: "<i class='fa fa-angle-up'></i>",
        scrollDistance: 300,
    });


   


})(jQuery);
