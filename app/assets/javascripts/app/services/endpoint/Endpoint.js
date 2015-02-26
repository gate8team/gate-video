'use strict';

(function(app){
    app.config(function ($provide) {
        $provide.factory('APIEndpoints', function () {
            return {
                auth: {
                    login: '/users/sign_in.json'
                },
                api: {
                    test: '/api/test.json'
                }
            };
        });
    });
})(window.gateVideoServicesApp);
