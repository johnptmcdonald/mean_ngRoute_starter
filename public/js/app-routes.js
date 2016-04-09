angular.module('routerRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/pages/home.html',
			controller: 'homeController',
			controllerAs: 'home'
		})

		.when('/about', {
			templateUrl: 'views/pages/about.html',
			controller: 'aboutController',
			controllerAs: 'about'
		})

		.when('/contact', {
			templateUrl: 'views/pages/contact.html',
			controller: 'contactController',
			controllerAs: 'contact'
		})

	$locationProvider.html5Mode(true)
	// this gets rid of the ugly url with the hash in it, but still allows the history API to work
	// (with the back buttons and stuff)

})