/**
 * Created by jainishshah on 12/21/15.
 */
'use strict';

angular.module('myApp.about_us', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about_us', {
            templateUrl: 'view/about_us.html',
            controller: 'about_usCtrl'
        });
    }])

    .controller('about_usCtrl', [function() {

    }]);