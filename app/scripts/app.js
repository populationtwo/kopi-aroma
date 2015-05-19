'use strict';

/**
 * @ngdoc overview
 * @name kopiAromaApp
 * @description
 * # kopiAromaApp
 *
 * Main module of the application.
 */
angular
	.module( 'kopiAromaApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'duScroll'
	] )
	.config( function ($routeProvider) {
		$routeProvider
			.when( '/', {
				templateUrl: 'views/main.html',
				controller : 'MainCtrl'
			} )
			.when( '/checkout', {
				templateUrl: 'views/checkout.html'
			} )
			.otherwise( {
				redirectTo: '/'
			} );
	} )

	.factory( 'purchaseDataFactory', function ($q, $timeout, $http) {
		var purchaseData = {
			fetch: function () {

				var deferred = $q.defer();

				$timeout( function () {
					$http.get( 'scripts/purchase-data.json' ).success( function (data) {
						deferred.resolve( data );
					} );
				}, 30 );

				return deferred.promise;
			}
		};

		return purchaseData;
	} );


