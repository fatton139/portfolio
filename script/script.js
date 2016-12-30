// JavaScript Document
$(function() {
    "use strict";					
	$(document).ready(function() { 	
		$(window).bind("load", function() { 
			$("body, nav li").css("display", "none");	
			$(".loading").addClass("loaded");	
	
			if ( $(".loading").hasClass("loaded") ) {
				alert('DOM ready');	
				$("body").fadeIn(2000);
				$("nav li").each(function(index) {
					$(this).delay(300*index).fadeIn(600);
				});
				$("a.link").click(function(event){
					event.preventDefault();
					var linkLocation = $(this).attr("href");
					$("body").fadeOut(1000, redirectPage);   
					function redirectPage() {
						window.location = linkLocation;
					}
				});
			}
		});			
			
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