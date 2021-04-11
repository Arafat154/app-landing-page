/*--------owl carousel----------*/
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



/*------------ripple effect--------------*/
! function(e, t) {
   "use strict";
   e.fn.rippleEffect = function(t) {
      var n = { element: ".to-ripple" },
         i = (e.extend({}, n, t), function(t) {
            return e(t).on("click", function(t) {
               var n, i, p, r, s = e(this);
               0 === s.find(".ripple").length && (s.addClass("prepare-ripple"), s.prepend('<span class="ripple"></span>')), (n = s.find(".ripple")).removeClass("on-animate"), n.height() || n.width() || (i = Math.max(s.outerWidth(), s.outerHeight()), n.css({ height: i, width: i })), p = t.pageX - s.offset().left - n.width() / 2, r = t.pageY - s.offset().top - n.height() / 2, n.css({ top: r + "px", left: p + "px" }).addClass("on-animate")
            }), !1
         });
      return function(e) { return e.each(function() { i(this) }), e }(this)
   }
}(jQuery, document);



/*--------ripple effect initializer---------*/
$(function(){
  $('.ripple-btn, .nav-link, .box').rippleEffect();
});