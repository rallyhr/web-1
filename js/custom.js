(function ($) {
    "use strict";

    /*----------------------------------
   OWL CAROUSEL INIT
   ------------------------------------*/
   $('.testimonial-wrap').owlCarousel({
    items: 1,
    loop:true,
    autoplay: false,
    autoplayTimeout:3000,
    dots: true
});


    $("a[rel^='prettyPhoto']").prettyPhoto({
        default_width: 750,
        default_height: 375,
    });


    $('.pager-img').on('click', function () {
        $('.middle-item').attr('src', $(this).attr('src'));
    });

    //Scroll spy
    $('body').scrollspy({
     target: '.navbar',
     offset: 90,
      });
    /* =================================
            ===  Sticky Menu       ===
            =================================== */
    var header = $('.main-menu-wraps');
    var win = $(window);

    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 100) {
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
