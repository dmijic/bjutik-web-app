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

		  // Navbar

		  window.onscroll = function() {setStickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function setStickyNav() {
  if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
  } else {
		navbar.classList.remove("sticky");
  }
}

// Home and Pricelist toggle

function showPricelist() {
	document.querySelector(".homeView").classList.add("section-hidden");
	document.querySelector(".pricelistView").classList.remove("section-hidden");
	document.querySelector("#navBtnHome").classList.remove("active");
	document.querySelector("#navBtnPricelist").classList.add("active");	
	document.querySelector("#heroImg").classList.add("section-hidden");
	document.querySelector("#header").classList.add("section-hidden");
	navbar.classList.add("sticky-top");
}
function showHome() {
	document.querySelector(".homeView").classList.remove("section-hidden");
	document.querySelector(".pricelistView").classList.add("section-hidden");
	document.querySelector("#navBtnHome").classList.add("active");
	document.querySelector("#navBtnPricelist").classList.remove("active");
	document.querySelector("#heroImg").classList.remove("section-hidden");
	document.querySelector("#header").classList.remove("section-hidden");
	navbar.classList.remove("sticky-top");
}
document.getElementById("navBtnHome").addEventListener("click", function(event){
	event.preventDefault()
  });