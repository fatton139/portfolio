// JavaScript Document
	
$(function() {
    "use strict";					
	$(document).ready(function() {
		$('.gal').isotope({
			percentPosition: true,
			rezise:false, 
			itemSelector: '.galstd',
			layoutMode: 'masonry'
		});
	}); //end of document ready
}); //end of use
