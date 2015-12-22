/**
 * Created by jainishshah on 12/21/15.
 */
'use strict';

angular.module('myApp.drama', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/drama', {
            templateUrl: 'view/drama.html',
            controller: 'dramaCtrl'
        });
    }])

    .controller('dramaCtrl', [function() {

    }]);