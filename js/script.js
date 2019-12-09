$('.mobile-btn').on(  'click',function () {
    $('.mobile-btn').toggleClass('active')
    $('.nav-menu').toggleClass('active')
})
$('.nav-menu  li a').on('click',function () {
   $('.mobile-btn').removeClass('active')
    $('.nav-menu').removeClass('active')
})
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            991: {
                items:3
            },
            1100: {
                items:4
            }
        }


    });
});
