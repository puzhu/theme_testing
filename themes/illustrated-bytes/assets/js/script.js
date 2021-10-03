// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  $('body').addClass('loaded');
});

/*! Fades out the whole page when clicking links */
$('a:not([target="_blank"])').click(function (e) {
  e.preventDefault();
  newLocation = this.href;
  $('body').fadeOut(400, newpage);
});

function newpage() {
  window.location = newLocation;
}

$(document).ready(function () {
  $('body').fadeIn(200);
});

/*! Reloads page on every visit */
function Reload() {
  try {
    var headElement = document.getElementsByTagName("head")[0];
    if (headElement && headElement.innerHTML)
      headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
  } catch (e) {}
}

/*! Reloads on every visit in mobile safari */
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
  window.onpageshow = function (evt) {
    if (evt.persisted) {
      document.body.style.display = "none";
      location.reload();
    }
  };
}

// on ready state
$(document).ready(function () {
  'use strict';

  // masonry
  setTimeout(function () {
    $('.masonry-wrapper').masonry({
      columnWidth: 1
    });
  }, 1000);

	// testimonials slider
	$('.testimonial-slider').slick({
		dots: false,
		infinite: false,
		speed: 500,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
		responsive: [
			{
				breakpoint: 1040,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 753,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});