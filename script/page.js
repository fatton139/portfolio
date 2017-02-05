// JavaScript Document
$(function() {
    "use strict";					
	$(document).ready(function() {
		$(".ajax a, a.headera").click(function(event){
			$(".ext").addClass("ext-white");
			event.preventDefault();
			var content = $(this).attr("href");
			var script = $(this).attr("js");
			var pagehash = window.location.hash.substring(1);
			window.location.hash = content;
			$(".loading").removeClass("loaded");
			$("body").css("overflow", "hidden");
			
			setTimeout(function(){
				$("#bodycontent").load(content, function(response, status){
					if (status === "success") {
						setTimeout(function(){
							$(".loading").addClass("loaded");
							$("body").css("overflow", "auto");
							getscript();
						}, 700);
					}
					else {
						alert("bad request");	
					}
				});
			}, 1500);
			
			function getscript() {
			$.getScript("script/" + script);
			}
			
		});
		
		
	}); //end of document ready
}); //end of use

