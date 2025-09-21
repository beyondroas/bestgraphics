

(function($) {
    "use strict";

    $(document).ready( function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        $('#mobile-menus').meanmenu({
            meanMenuContainer: '.mobile-menus',
            meanScreenWidth: "1920",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

        //>> Scrolldown Start <<//
        $("#scrollDown").on("click", function () {
            setTimeout(function () {
                $("html, body").animate({ scrollTop: "+=1000px" }, "slow");
            }, 1000);
        });

   
        //>> Hero Slider Start <<//
 const sliderActive1 = ".hero-slider";
 const sliderInit1 = new Swiper(sliderActive1, {
     loop: true,
     slidesPerView: 1,
     effect: "fade",
     speed: 2000,
     autoplay: {
         delay: 4000,
         disableOnInteraction: false,
     },
     pagination: {
         el: ".dot",
         clickable: true,
     },

 });
 // content animation when active start here
 function animated_swiper(selector, init) {
     let animated = function animated() {
         $(selector + " [data-animation]").each(function() {
             let anim = $(this).data("animation");
             let delay = $(this).data("delay");
             let duration = $(this).data("duration");
             $(this)
                 .removeClass("anim" + anim)
                 .addClass(anim + " animated")
                 .css({
                     webkitAnimationDelay: delay,
                     animationDelay: delay,
                     webkitAnimationDuration: duration,
                     animationDuration: duration,
                 })
                 .one("animationend", function() {
                     $(this).removeClass(anim + " animated");
                 });
         });
     };
     animated();
     init.on("slideChange", function() {
         $(sliderActive1 + " [data-animation]").removeClass("animated");
     });
     init.on("slideChange", animated);
 }
 animated_swiper(sliderActive1, sliderInit1);

        //>> Brand Slider Start <<//

        if($('.brand-slider').length > 0) {
            const brandSlider = new Swiper(".brand-slider", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
    
                breakpoints: {
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Testimonial Slider Start <<//
        if($('.testimonial-slider').length > 0) {
            const testimonialSlider = new Swiper(".testimonial-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

          //>> Testimonial Slider Start <<//
          if($('.testimonial-slider-3').length > 0) {
            const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot7",
                    clickable: true,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }


         //>> Project Slider Start <<//
        if($('.project-slider').length > 0) {
            const projectSlider = new Swiper(".project-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot2",
                    clickable: true,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

         //>> Project Slider Start <<//
         if($('.project-slider-2').length > 0) {
            const projectSlider2 = new Swiper(".project-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot2",
                    clickable: true,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

         //>> Service Slider Start <<//
        if($('.service-slider').length > 0) {
            const serviceSlider = new Swiper(".service-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot2",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Testimonial Slider Start <<//
        if($('.testimonial-slider-2').length > 0) {
            const testimonialSlider = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // Image src and class add js area start here ***
        $(document).on("mouseenter", ".changeImage2", function() {
            let newImage = $(this).data("image");
            let fadeDuration = 200;

            $("#myImage2").fadeOut(fadeDuration, function() {
                $("#myImage2").attr("src", newImage);
                $("#myImage2").fadeIn(fadeDuration);
            });

            $(this).addClass("clicked");
            $(".changeImage2").not(this).removeClass("clicked");
        });
        // Image src and class add js area end here ***
        
        //>> Back To Top Slider Start <<//
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        
        $(document).on('click', '#back-top', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

         //>> Search Popup Start <<//
         const $searchWrap = $(".search-wrap");
         const $navSearch = $(".nav-search");
         const $searchClose = $("#search-close");
 
         $(".search-trigger").on("click", function (e) {
             e.preventDefault();
             $searchWrap.animate({ opacity: "toggle" }, 500);
             $navSearch.add($searchClose).addClass("open");
         });
 
         $(".search-close").on("click", function (e) {
             e.preventDefault();
             $searchWrap.animate({ opacity: "toggle" }, 500);
             $navSearch.add($searchClose).removeClass("open");
         });
 
         function closeSearch() {
             $searchWrap.fadeOut(200);
             $navSearch.add($searchClose).removeClass("open");
         }
 
         $(document.body).on("click", function (e) {
             closeSearch();
         });
 
         $(".search-trigger, .main-search-input").on("click", function (e) {
             e.stopPropagation();
         });
 

        
    }); // End Document Ready Function

     

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }

    loader();
   

})(jQuery); // End jQuery

