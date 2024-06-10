

$('.apps-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
var selector = $('.apps-slider.owl-carousel');
$('.my-next-button1').click(function() {
  selector.trigger('next.owl.carousel');
});

$('.my-prev-button1').click(function() {
  selector.trigger('prev.owl.carousel');
});










// testimonials
$('.side-testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




var owl = $('.guide-page-slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    margin: 60,    
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    dots: false,
    navText: ['&#8592;', '&#8594;'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1200: {
            items: 2
        }
    }
  });
  var guide = $('.guide-page-slider.owl-carousel');
  $('.my-next-button5').click(function() {
    guide.trigger('next.owl.carousel');
  });
  
  $('.my-prev-button5').click(function() {
    guide.trigger('prev.owl.carousel');
  });
  
  
  jQuery(document.documentElement).keydown(function (event) {    
    if (event.keyCode == 37) {
      owl.trigger('prev.owl.carousel', [400]);
    } else if (event.keyCode == 39) {
        owl.trigger('next.owl.carousel', [400]);
    }
  });












$('.tutorial-slider').owlCarousel({
    loop:true,
    touchDrag: true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
var tutorial = $('.tutorial-slider.owl-carousel');
$('.my-next-button2').click(function() {
    tutorial.trigger('next.owl.carousel');
});

$('.my-prev-button2').click(function() {
    tutorial.trigger('prev.owl.carousel');
});









