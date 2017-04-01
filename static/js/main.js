;(function () {

	'use strict';

	// iPad and iPod detection	
	var isiPad = function () {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function () {
		return (
			(navigator.platform.indexOf("<i></i>Phone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function () {

		// click Sidebar
		$(document).click(function (e) {
			var container = $("#v2js-offcanvas, .js-v2js-close-offcanvas");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('#v2js-offcanvas').hasClass('animated fadeInLeft')) {

					$('#v2js-offcanvas').addClass('animated fadeOutLeft');
					setTimeout(function () {
						$('#v2js-offcanvas').css('display', 'none');
						$('#v2js-offcanvas').removeClass('animated fadeOutLeft fadeInLeft');
					}, 1000);
					$('.js-v2js-nav-toggle').removeClass('active');

				}
			}
		});

		$('body').on('click', '.js-v2js-close-offcanvas', function (event) {


			$('#v2js-offcanvas').addClass('animated fadeOutLeft');
			setTimeout(function () {
				$('#v2js-offcanvas').css('display', 'none');
				$('#v2js-offcanvas').removeClass('animated fadeOutLeft fadeInLeft');
			}, 1000);
			$('.js-v2js-nav-toggle').removeClass('active');

			event.preventDefault();

		});

	};


	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-v2js-nav-toggle', function (event) {

			var $this = $(this);

			$('#v2js-offcanvas').css('display', 'block');
			setTimeout(function () {
				$('#v2js-offcanvas').addClass('animated fadeInLeft');
			}, 100);

			// $('body').toggleClass('v2js-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

	};

	var scrolledWindow = function () {

		$(window).scroll(function () {

			var header = $('#v2js-header'),
				scrlTop = $(this).scrollTop();


			$('#v2js-home .flexslider .v2js-overlay').css({
				'opacity': (.5) + (scrlTop / 2000)
			});

			if ($('body').hasClass('offcanvas-visible')) {
				$('body').removeClass('offcanvas-visible');
				$('.js-v2js-nav-toggle').removeClass('active');
			}

		});

		$(window).resize(function () {
			if ($('body').hasClass('offcanvas-visible')) {
				$('body').removeClass('offcanvas-visible');
				$('.js-v2js-nav-toggle').removeClass('active');
			}
		});

	};


	// Page Nav
	var clickMenu = function () {
		var topVal = ( $(window).width() < 769 ) ? 0 : 58;

		$(window).resize(function () {
			topVal = ( $(window).width() < 769 ) ? 0 : 58;
		});

		if ($(this).attr('href') != "#") {
			$('#v2js-main-nav a:not([class="external"]), #v2js-offcanvas a:not([class="external"])').click(function (event) {
				var section = $(this).data('nav-section');


				if ($('div[data-section="' + section + '"]').length) {

					$('html, body').animate({
						scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
					}, 500);

				}
				event.preventDefault();

			});
		}


	};


	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });


	};


	// Document on load.
	$(function () {

		function animate() {
			mobileMenuOutsideClick();
			burgerMenu();
			scrolledWindow();

			// Animations
			contentWayPoint();
		}

		animate();

		window.addEventListener("hashchange", function () {
			animate()
		});



	});


}());