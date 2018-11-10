// Code for Preloader
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn',);
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });


$(document).ready(function(){
    $('.parallax').parallax();
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
	$('.slider').slider();
	$('.sidenav').sidenav();
	$('.dropdown-trigger').dropdown({hover: true});
	$('.chips').chips();
	$('#container').imagesLoaded( function() {
		$('.grid').masonry({
						  // options
						  columnWidth: '.grid-sizer',
						  itemSelector: '.grid-item',
						  percentPosition: true

						})		
	});
	$('.carousel-slider').flickity({
	  // options
	  cellAlign: 'center',
	  contain: true
	});

})(jQuery); // end of jQuery name space
