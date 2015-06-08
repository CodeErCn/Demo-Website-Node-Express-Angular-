// Create Angular
angular.module('hollandDemo', ['ngRoute']);

// Configure the Route
angular.module('hollandDemo').config(function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'templates/main/home.html'
    })
    .when('/specials', {
        templateUrl: 'templates/main/specials.html'
    })
    .when('/destinations', {
        templateUrl: 'templates/main/destinations.html'
    })
    .when('/excursions', {
        templateUrl: 'templates/main/excursions.html'
    })
    .when('/onboard', {
        templateUrl: 'templates/main/onboard_our_ships.html'
    })
    .when('/new-to-cruise', {
        templateUrl: 'templates/main/new_to_cruising.html'
    })
    .when('/booked-guests', {
        templateUrl: 'templates/main/for_booked_guests.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})