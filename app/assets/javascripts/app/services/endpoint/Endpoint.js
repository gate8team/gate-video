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
                    webSites: {
                        index: {
                            type: 'get',
                            path: '/api/v1/web-sites.json'
                        }
                    },
                    test: '/api/test.json'
                }
            };
        });
    });
})(window.gateVideoServicesApp);
