function myFunction(){preloader.style.display="none"}$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:2},1000:{items:4}}}),function(t,e){"use strict";t.fn.rippleEffect=function(e){var i=(t.extend({},{element:".to-ripple"},e),function(e){return t(e).on("click",function(e){var i,n,o,l,s=t(this);0===s.find(".ripple").length&&(s.addClass("prepare-ripple"),s.prepend('<span class="ripple"></span>')),(i=s.find(".ripple")).removeClass("on-animate"),i.height()||i.width()||(n=Math.max(s.outerWidth(),s.outerHeight()),i.css({height:n,width:n})),o=e.pageX-s.offset().left-i.width()/2,l=e.pageY-s.offset().top-i.height()/2,i.css({top:l+"px",left:o+"px"}).addClass("on-animate")}),!1});return function(t){return t.each(function(){i(this)}),t}(this)}}(jQuery,document),$(function(){$(".ripple-btn, .nav-link, .box").rippleEffect()}),function($){function numberRoller(t){var e=parseInt($(".roller-title-number-"+t).attr("data-min")),i=parseInt($(".roller-title-number-"+t).attr("data-max")),n=parseInt($(".roller-title-number-"+t).attr("data-delay"));numberRoll(t,e,i,parseInt($(".roller-title-number-"+t).attr("data-increment")),1e3*n/(i-e))}function numberRoll(slno,min,max,increment,timeout){min<=max?($(".roller-title-number-"+slno).html(min),min=parseInt(min)+parseInt(increment),setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout)):$(".roller-title-number-"+slno).html(max)}$(document).ready(function(){$("body").prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>"),$(document).rollerInit(),$(".numscroller").scrollzip({showFunction:function(){numberRoller($(this).attr("data-slno"))},wholeVisible:!1})}),$(document).on("scroll resize",function(){$(".numscroller").scrollzip({showFunction:function(){numberRoller($(this).attr("data-slno"))},wholeVisible:!1})}),$.fn.rollerInit=function(){var t=0;$(".numscroller").each(function(){t++,$(this).attr("data-slno",t),$(this).addClass("roller-title-number-"+t)})},$.fn.scrollzip=function(t){var e=$.extend({showFunction:null,hideFunction:null,showShift:0,wholeVisible:!1,hideShift:0},t);return this.each(function(t,i){return $(this).addClass("scrollzip"),$.isFunction(e.showFunction)&&!$(this).hasClass("isShown")&&$(window).outerHeight()+$("#scrollzipPoint").offset().top-e.showShift>$(this).offset().top+(e.wholeVisible?$(this).outerHeight():0)&&$("#scrollzipPoint").offset().top+(e.wholeVisible?$(this).outerHeight():0)<$(this).outerHeight()+$(this).offset().top-e.showShift&&($(this).addClass("isShown"),e.showFunction.call(this)),$.isFunction(e.hideFunction)&&$(this).hasClass("isShown")&&($(window).outerHeight()+$("#scrollzipPoint").offset().top-e.hideShift<$(this).offset().top+(e.wholeVisible?$(this).outerHeight():0)||$("#scrollzipPoint").offset().top+(e.wholeVisible?$(this).outerHeight():0)>$(this).outerHeight()+$(this).offset().top-e.hideShift)&&($(this).removeClass("isShown"),e.hideFunction.call(this)),this})}}(jQuery);