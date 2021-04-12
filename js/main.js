/*--------owl carousel----------*/
$('.owl-carousel').owlCarousel({
   loop: true,
   margin: 10,
   nav: false,
   dots: false,
   autoplay: true,
   autoplayTimeout: 3000,
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


/**
* jQuery scroroller Plugin 1.0
*
* http://www.tinywall.net/
* 
* Developers: Arun David, Boobalan
* Copyright (c) 2014 
*/
(function($){
    $(document).ready(function(){
        $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
        $(document).rollerInit();
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                                    numberRoller($(this).attr('data-slno'));
                                },
            wholeVisible    :     false,
        });
    });
    $(document).on("scroll resize", function(){
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                                    numberRoller($(this).attr('data-slno'));
                                },
            wholeVisible    :     false,
        });
    });
    $.fn.rollerInit=function(){
        var i=0;
        $('.numscroller').each(function() {
            i++;
           $(this).attr('data-slno',i); 
           $(this).addClass("roller-title-number-"+i);
        });        
    };
    $.fn.scrollzip = function(options){
        var settings = $.extend({
            showFunction    : null,
            hideFunction    : null,
            showShift       : 0,
            wholeVisible    : false,
            hideShift       : 0,
        }, options);
        return this.each(function(i,obj){
            $(this).addClass('scrollzip');
            if ( $.isFunction( settings.showFunction ) ){
                if(
                    !$(this).hasClass('isShown')&&
                    ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
                ){
                    $(this).addClass('isShown');
                    settings.showFunction.call( this );
                }
            }
            if ( $.isFunction( settings.hideFunction ) ){
                if(
                    $(this).hasClass('isShown')&&
                    (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
                ){
                    $(this).removeClass('isShown');
                    settings.hideFunction.call( this );
                }
            }
            return this;
        });
    };
    function numberRoller(slno){
            var min=parseInt($('.roller-title-number-'+slno).attr('data-min'));
            var max=parseInt($('.roller-title-number-'+slno).attr('data-max'));
            var timediff=parseInt($('.roller-title-number-'+slno).attr('data-delay'));
            var increment=parseInt($('.roller-title-number-'+slno).attr('data-increment'));
            var numdiff=max-min;
            var timeout=(timediff*1000)/numdiff;
            //if(numinc<10){
                //increment=Math.floor((timediff*1000)/10);
            //}//alert(increment);
            numberRoll(slno,min,max,increment,timeout);
            
    }
    function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
        if(min<=max){
            $('.roller-title-number-'+slno).html(min);
            min=parseInt(min)+parseInt(increment);
            setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
        }else{
            $('.roller-title-number-'+slno).html(max);
        }
    }
})(jQuery);
