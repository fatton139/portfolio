// JavaScript Document
$(function() {
    "use strict";	
	$(document).ready(function() { 
	
		$(".navtoggle").click(function(){
			$(this).toggleClass("navtogglemove");
			$("#navigation").toggleClass("mobilenav");
		});
	
		$("header").interactive_bg({
			strength: 3,              
			scale: 1.01,               
			animationSpeed: "250ms"
		});
		
		$(window).resize(function() {
			$("header > .ibg-bg").css({
				width: $(window).outerWidth(),
				height: $(window).outerHeight()
			});
		});



	}); //end of document ready
}); //end of use