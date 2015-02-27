'use strict';

(function(app){
    app.config(function ($provide) {
        $provide.factory('Event', function () {
            return {
                auth: {
                    notAuthenticated: 'notAuthenticated',
                    notAuthorized: 'notAuthorized',
                    sessionTimeout: 'sessionTimeout',
                    loggedOut: 'loggedOut',
                    loggedIn: 'loggedIn'
                }
            };
        });
    });
})(window.gateVideoServicesApp);
