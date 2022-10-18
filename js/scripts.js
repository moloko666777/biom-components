$(document).ready(function () {
    (function ($) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            margin: 33,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive:{
                0:{
                    items:1,
                    margin:10,
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });
    })(jQuery);
});