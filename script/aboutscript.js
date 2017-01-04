// JavaScript Document
	
$(function() {
    "use strict";					
	$(document).ready(function() {
		$(".main").interactive_bg({
			strength: 3,              
			scale: 1.01,               
			animationSpeed: "250ms"
		});
		$(window).resize(function() {
			$(".main > .ibg-bg").css({
				width: $(window).outerWidth(),
				height: $(window).outerHeight()
			});
		});	
	}); //end of document ready
}); //end of use
