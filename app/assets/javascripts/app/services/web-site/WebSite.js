'use strict';

(function(app){
    app.service('WebSite', function($http, $log, $window, $q, $rootScope, $location, APIEndpoints, Event) {
        var webSite = {};

        webSite.load = function() {
            return this.sendApiRequest(APIEndpoints.api.webSites.index);
        };
        
        webSite.create = function(webSite) {
            return this.sendApiRequest(APIEndpoints.api.webSites.create, {web_site: webSite});
        };

        webSite.sendApiRequest = function(config, data) {
            var deferred = $q.defer();
            
            $http[config.type](config.path, data || {})
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
