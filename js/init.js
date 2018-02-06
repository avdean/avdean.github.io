// Code for Preloader
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

$(document).ready(function(){
	$('.materialboxed').materialbox();
});

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });

$(document).ready(function(){
	$('.slider').slider();
});

$(document).ready(function(){
	 $('.carousel').carousel({
		dist: -80,  //	Perspective zoom. If 0, all items are the same size. (Default: -100)
	 }
	 );
 });


$('.dropdown-button').dropdown({
		 inDuration: 300,
		 outDuration: 225,
		 constrainWidth: false, // Does not change width of dropdown to that of the activator
		 hover: true, // Activate on hover
		 gutter: 0, // Spacing from edge
		 belowOrigin: true, // Displays dropdown below the button
		 alignment: 'left', // Displays dropdown with edge aligned to the left of button
		 stopPropagation: false // Stops event propagation
	 }
 );
// Basic Parallax and SideNav code
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	 $('.materialboxed').materialbox();

  }); // end of document ready
})(jQuery); // end of jQuery name space
