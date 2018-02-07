// Code for Preloader
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

$(document).ready(function(){
		$('.materialboxed').materialbox();
    $('.tooltipped').tooltip({delay: 50});
		$('.slider').slider();
    $('.carousel').carousel();
    $('.sidenav').sidenav();
		$('.parallax').parallax();
		$('.dropdown-trigger').dropdown({hover: true});

})(jQuery); // end of jQuery name space
