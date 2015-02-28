'use strict';

(function(app){
    app.service('User', function($http, $log, $window, $q, $rootScope, $location, APIEndpoints, Event) {
        var user = {
            status: 'unauth'
        };
        
        user.login = function(user) {
            $http
                .post(APIEndpoints.auth.login, {user: user})
                .success(function (data, status, headers, config) {
                    if (!!data.token) {
                        $window.sessionStorage.token = data.token;
                        $rootScope.$broadcast(Event.auth.loggedIn);
                        $location.path('/');
                    }
                    //$log.log(data);
                })
                .error(function (data, status, headers, config) {
                    $rootScope.$broadcast(Event.auth.notAuthorized);
                });
        };
        
        user.sendApiRequest = function() {
            var deferred = $q.defer();
            
            //$http.defaults.headers.common['Authorization'] = 'Bearer {token}'.replace('{token}', $window.sessionStorage.token);
            $http.get(APIEndpoints.api.test)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                    $log.log(data);
                }).error(function(data, status, headers, config) {
                    deferred.reject({message: 'Not Auth.. Sorry..'});
                    $rootScope.$broadcast(Event.auth.notAuthorized);
                });
            
            return deferred.promise;
        };
        
        user.logout = function() {
            $http.delete(APIEndpoints.auth.logout);
            $window.sessionStorage.removeItem('token');
            $rootScope.$broadcast(Event.auth.loggedOut);
            //$location.path('/login');
        };  
        
        return user;
    });
})(window.gateVideoServicesApp);
