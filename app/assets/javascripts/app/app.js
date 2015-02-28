'use strict';

(function (angular, global) {
    var gateVideoApp = angular.module('gateVideoApp', ['gateVideoApp.services', 'gateVideoApp.controllers', 'ngRoute']);

    gateVideoApp.config(function ($httpProvider) {
        $httpProvider.interceptors.push('tokenInjector');
    });

    gateVideoApp.config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/assets/app/views/inner.html',
                controller: 'AuthController'
            }).
            when('/login', {
                templateUrl: '/assets/app/views/login.html',
                controller: 'AuthController'
            }).
            when('/web-sites', {
                templateUrl: '/assets/app/views/client/web-sites.html',
                controller: 'AuthController'
            }).
            otherwise({
                redirectTo: '/login'
            });

        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});
    });
})(angular, window);
