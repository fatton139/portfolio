// JavaScript Document
	
$(function() {
    "use strict";					
	$(document).ready(function() {
		$('.gal').isotope({
			percentPosition: true,
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
