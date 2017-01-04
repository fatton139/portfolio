// JavaScript Document
	
$(function() {
    "use strict";					
	$(document).ready(function() {
		setTimeout(function(){
			$(".loadanimate,.loadcircle").css("opacity","1");
		}, 1000);
		$(window).bind("load", function() { 
			$("body").css("display", "none");	
			$(".loading").addClass("loaded");	
	
			if ( $(".loading").hasClass("loaded") ) {
				//alert('DOM ready');	
				$("body").fadeIn(2000);
				window.sr = ScrollReveal();
					sr.reveal('nav li', {
						duration: 1000,
						scale: 0.0,
						opacity:0,
						easing: 'ease-in-out',
						useDelay: 'onload',
						mobile: false
					}, 300);
			}
		});
		
		$('#Modal1').load('contactmemodal.html');

		$("nav a, a.headera").click(function(event){
			event.preventDefault();
			var linkLocation = $(this).attr("href");
			$("body").fadeOut(1000, redirectPage);   
			function redirectPage() {
				window.location = linkLocation;
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

function toggleFullScreen(elem) {
    "use strict"; if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}