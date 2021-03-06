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
    dots: true,
});

$('.minus-left').on('mouseenter',function(){
    $('.sos').removeClass('active');
    $('.sos').animate({
        height: '360px',
        width: '360px',
    },500);


});

$('.minus-left').on('mouseleave',function(e){
    
    $('.sos').addClass('active');
    $('.sos').animate({
        height: '508px',
        width: '576px',
    },500);

});



$('.platform-carousel').owlCarousel({
    items: 1,
    loop:true,
    autoplay: true,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
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
