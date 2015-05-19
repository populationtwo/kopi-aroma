'use strict';

/**
 * @ngdoc function
 * @name kopiAromaApp.controller:FeedCtrl
 * @description
 * # MainCtrl
 * Controller of the kopiAromaApp
 */
angular.module( 'kopiAromaApp' )
	.controller( 'FeedCtrl', function ($scope, purchaseDataFactory) {
		purchaseDataFactory.fetch().then( function (data) {
			$scope.feeds = data;
		} );
	} );
