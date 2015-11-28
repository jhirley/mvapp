// app.js
(function(angular) {
	console.log('app.js is loading');

	angular.module('app', ['ngResource','ngRoute']);

	angular.module('app').config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
		$routeProvider
			.when('/', {
				templateUrl: '/partials/main/main',
				controller: 'MainCtrl'
			});
			// https://docs.angularjs.org/error/$location/nobase
	});

})(window.angular);

