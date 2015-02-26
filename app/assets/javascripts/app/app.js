'use strict';

(function(angular, global){
    var gateVideoApp = angular.module('gateVideoApp', ['gateVideoApp.services', 'gateVideoApp.controllers']);
    
    gateVideoApp.config(function($httpProvider) {
        $httpProvider.interceptors.push('tokenInjector');
    });
})(angular, window);
