// JavaScript Document
$(function() {
    "use strict";					
	$(document).ready(function() {
		$('.extinject').load('injects/subext.html');
		setTimeout(function(){
			$(".loadanimate,.loadcircle").css("opacity","1");
		}, 1000);
		$(window).bind("load", function() { 
			$("body").css("display", "none");	
			$(".loading").addClass("loaded");	
			if ( $(".loading").hasClass("loaded") ) {
				//alert('DOM ready');	
				$("body").fadeIn(2000);
			}
		});
		
		$(".ajax a, a.headera").click(function(event){
			event.preventDefault();
			var content = $(this).attr("href");
			var script = $(this).attr("js");
			
			window.location.hash = content;

			//alert("script/" + script);
			$.get(content, function(data, status){
        		//alert("Data: " + data + "\nStatus: " + status);
			});	
			if (content === "index.html") {
				$("body").load("indexbody.html", loading);
			}
			else {
				$("body").fadeOut(1000, loading);
			}
			function loading() {
				//alert("loading");
				$(".loading").removeClass("loaded");
				$(document).ready(function() {
					$("#bodycontent").load(content, function(){
						$('.extinject').load("injects/subext.html");
						$.getScript("script/" + script);	
						$("body").fadeIn(2000);
					});
				});
				//alert("loaded");
				$(document).ready(function() {
					$(".loading").addClass("loaded");
					$("body").css("overflow", "auto");	
				});
			}
		});
			
		$(".navtoggle").click(function(){
			$(this).toggleClass("navtogglemove");
			$("#navigation").toggleClass("mobilenav");
		});
		
		$(".navclose").click(function(){
			$(".navtoggle").toggleClass("navtogglemove");
			$("#navigation").removeClass("mobilenav");
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
		
		$('.gal').isotope({
			percentPosition: false,
			rezise:false, 
			itemSelector: '.galstd',
			layoutMode: 'packery'
		});
		$('.gal a').colorbox({
			maxWidth : '90%',
			maxHeight : '90%',
			opacity : 0.8,
			transition : 'elastic',
			current : "image {current} of {total}",
			scrolling: false,
			rel: "g1"
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