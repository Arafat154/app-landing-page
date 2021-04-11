$('.owl-carousel').owlCarousel({
   loop: true,
   margin: 10,
   nav: false,
   dots: false,
   autoplay: true,
   autoplayTimeout: 2000,
   autoplayHoverPause:true,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2
      },
      1000: {
         items: 4
      }
   }
})
