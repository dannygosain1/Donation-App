(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Touch?
			if (skel.vars.touch)
				$body.addClass('is-touch');

		// Forms.
			var $form = $('form');

			// Auto-resizing textareas.
				$form.find('textarea').each(function() {

					var $this = $(this),
						$wrapper = $('<div class="textarea-wrapper"></div>'),
						$submits = $this.find('input[type="submit"]');

					$this
						.wrap($wrapper)
						.attr('rows', 1)
						.css('overflow', 'hidden')
						.css('resize', 'none')
						.on('keydown', function(event) {

							if (event.keyCode == 13
							&&	event.ctrlKey) {

								event.preventDefault();
								event.stopPropagation();

								$(this).blur();

							}

						})
						.on('blur focus', function() {
							$this.val($.trim($this.val()));
						})
						.on('input blur focus --init', function() {

							$wrapper
								.css('height', $this.height());

							$this
								.css('height', 'auto')
								.css('height', $this.prop('scrollHeight') + 'px');

						})
						.on('keyup', function(event) {

							if (event.keyCode == 9)
								$this
									.select();

						})
						.triggerHandler('--init');

					// Fix.
						if (skel.vars.browser == 'ie'
						||	skel.vars.mobile)
							$this
								.css('max-height', '10em')
								.css('overflow-y', 'auto');

				});

			// Fix: Placeholder polyfill.
				$form.placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Menu.
			var $menu = $('#menu');

			$menu.wrapInner('<div class="inner"></div>');

			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menu
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						if (href == '#menu')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#menu">Close</a>');

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$menu._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});


			// furniture
			var $furniture = $('#furniture');

			$furniture.wrapInner('<div class="inner"></div>');

			$furniture._locked = false;

			$furniture._lock = function() {

				if ($furniture._locked)
					return false;

				$furniture._locked = true;

				window.setTimeout(function() {
					$furniture._locked = false;
				}, 350);

				return true;

			};

			$furniture._show = function() {

				if ($furniture._lock())
					$body.addClass('is-furniture-visible');

			};

			$furniture._hide = function() {

				if ($furniture._lock())
					$body.removeClass('is-furniture-visible');

			};

			$furniture._toggle = function() {

				if ($furniture._lock())
					$body.toggleClass('is-furniture-visible');

			};

			$furniture
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$furniture._hide();

					// Redirect.
						if (href == '#furniture')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#furniture">Close</a>');

			$body
				.on('click', 'a[href="#furniture"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$furniture._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$furniture._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$furniture._hide();

				});

			// household
			var $household = $('#household');

			$household.wrapInner('<div class="inner"></div>');

			$household._locked = false;

			$household._lock = function() {

				if ($household._locked)
					return false;

				$household._locked = true;

				window.setTimeout(function() {
					$household._locked = false;
				}, 350);

				return true;

			};

			$household._show = function() {

				if ($household._lock())
					$body.addClass('is-household-visible');

			};

			$household._hide = function() {

				if ($household._lock())
					$body.removeClass('is-household-visible');

			};

			$household._toggle = function() {

				if ($household._lock())
					$body.toggleClass('is-household-visible');

			};

			$household
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$household._hide();

					// Redirect.
						if (href == '#household')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#household">Close</a>');

			$body
				.on('click', 'a[href="#household"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$household._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$household._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$household._hide();

				});

			// clothes
			var $clothes = $('#clothes');

			$clothes.wrapInner('<div class="inner"></div>');

			$clothes._locked = false;

			$clothes._lock = function() {

				if ($clothes._locked)
					return false;

				$clothes._locked = true;

				window.setTimeout(function() {
					$clothes._locked = false;
				}, 350);

				return true;

			};

			$clothes._show = function() {

				if ($clothes._lock())
					$body.addClass('is-clothes-visible');

			};

			$clothes._hide = function() {

				if ($clothes._lock())
					$body.removeClass('is-clothes-visible');

			};

			$clothes._toggle = function() {

				if ($clothes._lock())
					$body.toggleClass('is-clothes-visible');

			};

			$clothes
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$clothes._hide();

					// Redirect.
						if (href == '#clothes')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#clothes">Close</a>');

			$body
				.on('click', 'a[href="#clothes"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$clothes._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$clothes._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$clothes._hide();

				});

			// food
			var $food = $('#food');

			$food.wrapInner('<div class="inner"></div>');

			$food._locked = false;

			$food._lock = function() {

				if ($food._locked)
					return false;

				$food._locked = true;

				window.setTimeout(function() {
					$food._locked = false;
				}, 350);

				return true;

			};

			$food._show = function() {

				if ($food._lock())
					$body.addClass('is-food-visible');

			};

			$food._hide = function() {

				if ($food._lock())
					$body.removeClass('is-food-visible');

			};

			$food._toggle = function() {

				if ($food._lock())
					$body.toggleClass('is-food-visible');

			};

			$food
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$food._hide();

					// Redirect.
						if (href == '#food')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#food">Close</a>');

			$body
				.on('click', 'a[href="#food"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$food._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$food._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$food._hide();

				});

			// electronics
			var $electronics = $('#electronics');

			$electronics.wrapInner('<div class="inner"></div>');

			$electronics._locked = false;

			$electronics._lock = function() {

				if ($electronics._locked)
					return false;

				$electronics._locked = true;

				window.setTimeout(function() {
					$electronics._locked = false;
				}, 350);

				return true;

			};

			$electronics._show = function() {

				if ($electronics._lock())
					$body.addClass('is-electronics-visible');

			};

			$electronics._hide = function() {

				if ($electronics._lock())
					$body.removeClass('is-electronics-visible');

			};

			$electronics._toggle = function() {

				if ($electronics._lock())
					$body.toggleClass('is-electronics-visible');

			};

			$electronics
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$electronics._hide();

					// Redirect.
						if (href == '#electronics')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#electronics">Close</a>');

			$body
				.on('click', 'a[href="#electronics"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$electronics._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$electronics._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$electronics._hide();

				});

			// books and toys
			var $bookstoys = $('#bookstoys');

			$bookstoys.wrapInner('<div class="inner"></div>');

			$bookstoys._locked = false;

			$bookstoys._lock = function() {

				if ($bookstoys._locked)
					return false;

				$bookstoys._locked = true;

				window.setTimeout(function() {
					$bookstoys._locked = false;
				}, 350);

				return true;

			};

			$bookstoys._show = function() {

				if ($bookstoys._lock())
					$body.addClass('is-bookstoys-visible');

			};

			$bookstoys._hide = function() {

				if ($bookstoys._lock())
					$body.removeClass('is-bookstoys-visible');

			};

			$bookstoys._toggle = function() {

				if ($bookstoys._lock())
					$body.toggleClass('is-bookstoys-visible');

			};

			$bookstoys
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$bookstoys._hide();

					// Redirect.
						if (href == '#bookstoys')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#bookstoys">Close</a>');

			$body
				.on('click', 'a[href="#bookstoys"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$bookstoys._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$bookstoys._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$bookstoys._hide();

				});

			// sports
			var $sports = $('#sports');

			$sports.wrapInner('<div class="inner"></div>');

			$sports._locked = false;

			$sports._lock = function() {

				if ($sports._locked)
					return false;

				$sports._locked = true;

				window.setTimeout(function() {
					$sports._locked = false;
				}, 350);

				return true;

			};

			$sports._show = function() {

				if ($sports._lock())
					$body.addClass('is-sports-visible');

			};

			$sports._hide = function() {

				if ($sports._lock())
					$body.removeClass('is-sports-visible');

			};

			$sports._toggle = function() {

				if ($sports._lock())
					$body.toggleClass('is-sports-visible');

			};

			$sports
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$sports._hide();

					// Redirect.
						if (href == '#sports')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#sports">Close</a>');

			$body
				.on('click', 'a[href="#sports"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$sports._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$sports._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$sports._hide();

				});

			// other
			var $other = $('#other');

			$other.wrapInner('<div class="inner"></div>');

			$other._locked = false;

			$other._lock = function() {

				if ($other._locked)
					return false;

				$other._locked = true;

				window.setTimeout(function() {
					$other._locked = false;
				}, 350);

				return true;

			};

			$other._show = function() {

				if ($other._lock())
					$body.addClass('is-other-visible');

			};

			$other._hide = function() {

				if ($other._lock())
					$body.removeClass('is-other-visible');

			};

			$other._toggle = function() {

				if ($other._lock())
					$body.toggleClass('is-other-visible');

			};

			$other
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$other._hide();

					// Redirect.
						if (href == '#other')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#other">Close</a>');

			$body
				.on('click', 'a[href="#other"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$other._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$other._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$other._hide();

				});

	});

})(jQuery);