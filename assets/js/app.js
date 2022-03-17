    // Gumshoe
    var gumshoe = new Gumshoe("nav a");
    $(document).ready(function () {
        $(".testimonial-content").owlCarousel({
            items: 3,
            autoplay: false,
            loop: true,
            nav: true,
            dots: false,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 3,
                }
            }
        });



        $(window).scroll(function () {
            // Header 
            if ($(this).scrollTop() > 100) {
                $("#header").addClass("header-shadow");
            } else {
                $("#header").removeClass("header-shadow");
            }

            // ScrollTop 
            if ($(this).scrollTop() > 300) {
                $(".scrolltop").css({
                    bottom: '50px'
                });
            } else {
                $(".scrolltop").css({
                    bottom: '-80px'
                });
            }
        })

        // Scrolltop Options 
        $(".scrolltop").click(function () {
            $("html,body").animate({
                scrollTop: "0"
            }, 500);
        })

        // Magnify Popup 
        $('.gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // Bar 
        $('#bar1').barfiller();
        $('#bar2').barfiller();
        $('#bar3').barfiller();
        $('#bar4').barfiller();

        // Portfolio 
        var mixer = mixitup('.works-area');


        //  Counter 
        // Counter Init 
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });

          //  Button 
          $(".owl-prev").html("<i class='fa fa-chevron-left'></i>");
          $(".owl-next").html("<i class='fa fa-chevron-right'></i>");


        //   Menu Opacity
        $(".humberger").click(function(){
            $(".primary-menu").toggleClass("show-menu-lg");
        })


    
    })

    // Scroll Reveal 
    
   const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: true
    });
    ScrollReveal().reveal('.hero-text,.about-left,.skills-image,.cta-text,.education-text,.big-news', { origin: 'left' });
    ScrollReveal().reveal('.hero-image, .about-right, .skills-text,.cta-btns,.education-image,.contact-map,.sidebar-news', { origin: 'right' });
    ScrollReveal().reveal('.single-service, .works-title, .single-work,.experience-title,.single-experience,.timeline-item,.team-title,.single-team,.contact-title,.form-group,.single-counter,.testimonial-title,.testimonial-content,.news-title,.single-news,.single-footer', { interval: 100});
    ScrollReveal().reveal('.footer-logo,.footer-description', { interval: 100,distance: '20px'});

   
// Anchor 
document.querySelectorAll("nav a").forEach(e=> e.addEventListener('click',function(){
    $(".primary-menu").removeClass("show-menu-lg");
}));
  
  

