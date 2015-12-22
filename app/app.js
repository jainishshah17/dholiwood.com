'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.the_latest',
    'myApp.movies',
    'myApp.music',
    'myApp.drama',
    'myApp.garba',
    'myApp.about_us',
    'myApp.contact'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
