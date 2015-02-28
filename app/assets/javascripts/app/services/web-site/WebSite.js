'use strict';

(function(app){
    app.service('WebSite', function($http, $log, $window, $q, $rootScope, $location, APIEndpoints, Event) {
        var webSite = {};

        webSite.load = function() {
            return this.sendApiRequest(APIEndpoints.api.webSites.index);
        };

        webSite.sendApiRequest = function(config) {
            var deferred = $q.defer();
            
            $http[config.type](config.path)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function(data, status, headers, config) {
                    deferred.reject(data);
                });
            
            return deferred.promise;
        };
        
        return webSite;
    });
})(window.gateVideoServicesApp);
