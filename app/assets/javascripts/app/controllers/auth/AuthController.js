'use strict';

(function(app){
    app.controller('AuthController', function($scope, $rootScope, $log, User, Event) {
        $scope.message = User.status;
        
        $scope.login = function() {
            User.login($scope.user);
        };
        
        $scope.logout = function() {
            User.logout();
        };
        
        $scope.apiCall = function() {
            User.sendApiRequest().then(function(data) {
                $scope.message = data.message;
            }, function(data) {
                $scope.message = data.message;
            });
        };

        $rootScope.$on(Event.auth.notAuthenticated, function() {
            // Do here whatever you want
            $log.log('Not Auth');
        });
    });
})(window.gateVideoControllersApp);
