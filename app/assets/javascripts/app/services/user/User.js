'use strict';

(function(app){
    app.service('User', function($http, $log, $window, $q, APIEndpoints) {
        var user = {
            status: 'unauth'
        };
        
        user.login = function(user) {
            $http
                .post(APIEndpoints.auth.login, user)
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
            $http.get(APIEndpoints.api.test)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                    $log.log(data);
                }).error(function(data, status, headers, config) {
                    deferred.reject({message: 'not auth.. sorry..'});
                    $log.log(data);
                });
            
            return deferred.promise;
        };
        
        user.logout = function() {
            $window.sessionStorage.removeItem('token');  
        };
        
        return user;
    });
})(window.gateVideoServicesApp);
