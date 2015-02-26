'use strict';

(function(app){
    app.service('User', function($http, $log, $window, $q) {
        var user = {
            status: 'unauth'
        };
        
        user.login = function(email, password) {
            $http
                .post('/users/sign_in.json', {user: {email: email, password: password}})
                .success(function (data, status, headers, config) {
                    if (!!data.token) {
                        $window.sessionStorage.token = data.token;
                    }
                    $log.log(data);
                });
        };
        
        user.sendApiRequest = function() {
            var deferred = $q.defer();
            
            $http.defaults.headers.common['Authorization'] = 'Bearer {token}'.replace('{token}', $window.sessionStorage.token);
            $http.get('/api/test.json')
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                    $log.log(data);
                }).success(function(data, status, headers, config) {
                    deferred.reject({message: 'not auth.. sorry..'});
                    $log.log(data);
                });
            
            return deferred.promise;
        };
        
        user.logout = function() {
            $window.sessionStorage.token = null;  
        };
        
        return user;
    });
})(window.gateVideoServicesApp);
