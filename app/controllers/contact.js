/**
 * Created by jainishshah on 12/21/15.
 */
'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'view/contact.html',
            controller: 'contactCtrl'
        });
    }])

    .controller('contactCtrl', [function() {

    }]);