/**
 * Created by jainishshah on 12/21/15.
 */
'use strict';

angular.module('myApp.music', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/music', {
            templateUrl: 'view/music.html',
            controller: 'musicCtrl'
        });
    }])

    .controller('musicCtrl', [function() {

    }]);