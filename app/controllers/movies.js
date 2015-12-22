/**
 * Created by jainishshah on 12/21/15.
 */
'use strict';

angular.module('myApp.movies', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/movies', {
            templateUrl: 'view/movies.html',
            controller: 'moviesCtrl'
        });
    }])

    .controller('moviesCtrl', [function() {

    }]);