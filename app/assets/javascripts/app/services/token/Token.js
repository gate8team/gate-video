'use strict';

(function(app){
    app.factory('tokenInjector', function($q, $location, $window) {
        var tokenInjector = {
            request: function (config) {
                if (!!$window.sessionStorage.token) {
                    config.headers['Authorization'] = 'Bearer {token}'.replace('{token}', $window.sessionStorage.token);
                }
                console.log(config);
                
                return config;
            }
        };
        
        return tokenInjector;
    });
})(window.gateVideoServicesApp);
