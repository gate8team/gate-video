'use strict';

(function(app){
    app.config(function ($provide) {
        $provide.factory('APIEndpoints', function () {
            return {
                auth: {
                    login: '/users/sign_in.json',
                    logout: '/users/sign_out.json'
                },
                api: {
                    test: '/api/test.json'
                }
            };
        });
    });
})(window.gateVideoServicesApp);
