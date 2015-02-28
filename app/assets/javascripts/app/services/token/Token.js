'use strict';

(function(app){
    app.factory('tokenInjector', function($q, $location, $log, $window) {
        var tokenInjector = {
            request: function (config) {
                if (!!$window.sessionStorage.token) {
                    config.headers['Authorization'] = 'Bearer {token}'.replace('{token}', $window.sessionStorage.token);
                }
                
                return config;
            },
            response: function(response){
                if (response.status === 401) {
                    //TODO redirect to login page
                }
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                if (rejection.status === 401) {
                    //TODO redirect to login page
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        };
        
        return tokenInjector;
    });
})(window.gateVideoServicesApp);
