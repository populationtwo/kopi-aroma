'use strict';

(function (window, $, undefined) {

	$( document ).ready( function () {
		//Declare all variables
		var numberAnimationIsExecuted = false;

		/**
		 * Check if Element is in viewport
		 */
		function checkElementInViewport(elem) {
			var $el = $( elem ),
			// Get the scroll position.
				scrollElem = ((navigator.userAgent.toLowerCase().indexOf( 'webkit' ) !== -1) ? 'body' : 'html'),
				$viewportTop = $( scrollElem ).scrollTop(),
				viewportBottom = $viewportTop + $( window ).height(),
			// Get the position of the element on the page.
				elemTopPosition = Math.round( $el.offset().top ),
				elemBottomPosition = elemTopPosition + $el.height();

			return ( (elemBottomPosition > $viewportTop) && (elemTopPosition < viewportBottom));
		}


		/**
		 * Animate stats number
		 */

		function checkAnimateStats() {
			var numberShutters = $( '.animate-number-sold' ),
				numberClients = $( '.animate-number-shipped' ),
				numberProjects = $( '.animate-number-stores' );

			if (checkElementInViewport( '#stats-animate-number' )) {  // check if the #stat section is in viewport

				if (!numberAnimationIsExecuted) { // check if the number has been animated
					numberAnimationIsExecuted = true;
					numberShutters.animateNumber( {
						number: 86,
						easing: 'easeInOut'
					}, 1000 );
					numberClients.animateNumber( {
						number: 251,
						easing: 'easeInOut'
					}, 1100 );
					numberProjects.animateNumber( {
						number: 658,
						easing: 'easeInOut'

					}, 1300 );
				}

			}
		}


		// Capture scroll events
		$( window ).scroll( function () {
			checkAnimateStats();
		} );

	} );


})( window, jQuery, undefined );