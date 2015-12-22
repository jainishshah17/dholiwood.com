/**
 * Created by jainishshah on 12/21/15.
 */
'use strict';

angular.module('myApp.garba', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/garba', {
            templateUrl: 'view/garba.html',
            controller: 'garbaCtrl'
        });
    }])

    .controller('garbaCtrl', [function() {

    }]);