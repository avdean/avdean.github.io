// Code for Preloader
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });

    $(document).ready(function() {
        $('.parallax').parallax();
    });

$(document).ready(function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
	$('.slider').slider();
	$('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
	$('.sidenav').sidenav();
	$('.dropdown-trigger').dropdown({hover: true});
	$('.chips').chips();
})(jQuery); // end of jQuery name space
