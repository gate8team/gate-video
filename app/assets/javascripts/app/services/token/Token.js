'use strict';

(function(app){
    app.factory('tokenInjector', function($q, $location, $log, $window) {
        var tokenInjector = {
            request: function (config) {
                if (!!$window.sessionStorage.token) {
                    config.headers['Authorization'] = 'Bearer {token}'.replace('{token}', $window.sessionStorage.token);
                }
                
                return config;
            }
        };
        
        return tokenInjector;
    });
})(window.gateVideoServicesApp);
