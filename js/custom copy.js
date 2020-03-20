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
$(".show_commentsandnotes_container").click(function () {
    $('.commentsandnotes_bg').fadeIn(1000, function() {
       $('.commentsandnotes_bg').addClass('show');
    });
    $('.commentsandnotes_container').fadeIn(1000, function() {
       $('.commentsandnotes_container').addClass('show');
    });
});
$('.minus-left').on('mouseenter',function(){
    $('.sos').fadeIn(1000, function(){

    });
    .removeClass('active', 1000)
    
    .css({'height': '360px', 'width' : '360px', 'margin-left': '90px'} );

});

$('.minus-left').on('mouseleave',function(e){
    
    $('.sos')
    .addClass('active')
    .css({'height': '508px', 'width' : '576px', 'margin-left': 'auto'}); 
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
