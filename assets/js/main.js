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
			document.getElementById(id+"-modal-close_btn").addEventListener("click", function(event){
				event.preventDefault()
			  });
		}
		
		function closeModal(id) {
			document.getElementById(id).classList.add("modal-hidden");
			document.querySelector("body").classList.remove("modal-open");
		}

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
	document.querySelector("#header").classList.add("section-hidden");
	navbar.classList.add("sticky-top");
	document.getElementById("navbar").classList.remove('navbar-show');
	menuIconBtn.toggleClass('menu-icon-active').toggleClass('menu-icon-not-active');
}
function showHome() {
	document.querySelector(".homeView").classList.remove("section-hidden");
	document.querySelector(".pricelistView").classList.add("section-hidden");
	document.querySelector("#navBtnHome").classList.add("active");
	document.querySelector("#navBtnPricelist").classList.remove("active");
	document.querySelector("#header").classList.remove("section-hidden");
	navbar.classList.remove("sticky-top");
	document.getElementById("navbar").classList.remove('navbar-show');
	menuIconBtn.toggleClass('menu-icon-active').toggleClass('menu-icon-not-active');
}
document.getElementById("navBtnHome").addEventListener("click", function(event){
	event.preventDefault()
  });


  // Floater

  window.addEventListener("onScroll", showFloater());

  function showFloater() {
  document.querySelector("body").setAttribute("onscroll", "onScrollFunctions()");
  var floater = document.getElementById("floater");
  var slideIn = 200;
	if (window.pageYOffset >= slideIn) {
	floater.classList.add("floater-slide-in")
	} else {
	floater.classList.remove("floater-slide-in");
	}
  }
  
  function closeFloater() {
	  document.getElementById("floater").classList.add("floater-hidden");
  }


  function onScrollFunctions() {
	showFloater();
	setStickyNav();
  }


    // Menu icon

	var menuIconBtn = $('.main-menu-btn');
	var menuIconBtnPricelist = $('.pricelist-menu-btn');

menuIconBtn.on('click', function() {
  $(this).toggleClass('menu-icon-active');
  $(this).toggleClass('menu-icon-not-active');
});

menuIconBtnPricelist.on('click', function() {
	$(this).toggleClass('menu-icon-active');
	$(this).toggleClass('menu-icon-not-active');
  });

// Menu display

function showMenu(id) {
	document.getElementById(id).classList.toggle('navbar-show');
}