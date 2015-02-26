'use strict';

(function(app){
    app.controller('AuthController', function($scope, User) {
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
    });
})(window.gateVideoControllersApp);
