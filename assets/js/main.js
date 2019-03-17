(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Gallery.
			$('.gallery').poptrox();

	});

})(jQuery);

		// Modal
		function openModal(id) {
			document.getElementById(id).classList.remove("modal-hidden");
			document.querySelector("body").classList.add("modal-open");
		}
		
		function closeModal(id) {
			document.getElementById(id).classList.add("modal-hidden");
			document.querySelector("body").classList.remove("modal-open");
		}
		document.getElementById("modal-close_btn").addEventListener("click", function(event){
			event.preventDefault()
		  });