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
	var $grid = $('.grid').isotope({
	  // options...
						  columnWidth: '.grid-sizer',
						  itemSelector: '.grid-item',
						  percentPosition: true
						});
						$('.filter-button-group').on( 'click', '.chip', function() {
						  var filterValue = $(this).attr('data-filter');
						  $grid.isotope({ filter: filterValue });
						});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {$grid.isotope('layout'); });
	$('.carousel-slider').flickity({
	  // options
	  cellAlign: 'center',
	  contain: true
	});

})(jQuery); // end of jQuery name space
