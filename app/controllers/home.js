/**
 * Created by jainishshah on 12/21/15.
 */
'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homeCtrl'
        });
    }])

    .controller('homeCtrl', [function() {

    }]);