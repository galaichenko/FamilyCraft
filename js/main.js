'use strict';
$(function () {
	
  $(window).scroll(function () {
    $('.logo-png').each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInDown");
      }
    });
  });

  $(window).scroll(function () {
	    $('.section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
    });
}