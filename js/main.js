$('.owl-carousel').owlCarousel({
   loop: true,
   margin: 10,
   nav: false,
   dots: true,
   autoplay: true,
   autoplayTimeout: 2000,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 3
      },
      1000: {
         items: 5
      }
   }
})



$(document).ready(function() {

   $('.first-button').on('click', function() {

      $('.animated-icon1').toggleClass('open');
   });
   $('.second-button').on('click', function() {

      $('.animated-icon2').toggleClass('open');
   });
   $('.third-button').on('click', function() {

      $('.animated-icon3').toggleClass('open');
   });
});