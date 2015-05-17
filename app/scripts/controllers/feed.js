'use strict';

/**
 * @ngdoc function
 * @name kopiAromaApp.controller:FeedCtrl
 * @description
 * # MainCtrl
 * Controller of the kopiAromaApp
 */
angular.module( 'kopiAromaApp' )
	//.controller('FeedCtrl', function ($scope) {
	//	$scope.awesomeThings = [
	//		'HTML5 Boilerplate',
	//		'AngularJS',
	//		'Karma'
	//	];
	//});


	.controller( 'FeedCtrl', function ($scope, purchaseDataFactory) {
		purchaseDataFactory.fetch().then( function (data) {
			$scope.feeds = data;
		} );
	} );
