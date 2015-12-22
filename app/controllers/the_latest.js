/**
 * Created by jainishshah on 12/21/15.
 */
'use strict';

angular.module('myApp.the_latest', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/the_latest', {
            templateUrl: 'view/the_latest.html',
            controller: 'the_latestCtrl'
        });
    }])

    .controller('the_latestCtrl', [function() {

    }]);