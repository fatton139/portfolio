// JavaScript Document
$(function() {
    "use strict";					
	$(document).ready(function() {
		setTimeout(function(){
			$(".loadanimate,.loadcircle").css("opacity","1");
		}, 1000);
		$(window).bind("load", function() { 
			$(".loading").addClass("loaded");
		});
		
		$(".ajax a, a.headera").click(function(event){
			$(".ext").addClass("ext-white");
			event.preventDefault();
			var content = $(this).attr("href");
			var script = $(this).attr("js");
			window.location.hash = content;
			$(".loading").removeClass("loaded");
			$("body").css("overflow", "hidden");
			setTimeout(function(){
				$("#bodycontent").load(content, function(response, status){
					if (status === "success") {
						setTimeout(function(){
							$(".loading").addClass("loaded");
							$("body").css("overflow", "auto");
							$.getScript("script/" + script);	
						}, 700);
					}
					else {
						alert("bad request");	
					}
				});
			}, 1500);
		});
	
		$(".navtoggle").click(function(){
			$(".navtoggle").addClass("navtogglemove");
			$("#navigation").addClass("mobilenav");
			$("nav i").css({opacity:"1", visibility:"visible"});
		});
		
		$(".navclose").click(function(){
			$(".navtoggle").removeClass("navtogglemove");
			$("#navigation").removeClass("mobilenav");
			$("nav i").css({opacity:"0", visibility:"hidden"});
		});
		
		//var width = $(window).width();
		//if(width > 768) {
		//	$("nav i").css({opacity:"1", visibility:"visible"});
		//	$(".navtxt").css({opacity:"1", visibility:"visible"});
		//}
		
		$(".back").click(function(){
			$(".ext").removeClass("ext-white");
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

var global = true;