'use strict';

(function(app){
    app.controller('AuthController', function($scope, $rootScope, $log, User, Event) {
        $scope.message = 'Some title here';
        
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
                //$scope.message = data.message;
            });
        };

        $rootScope.$on(Event.auth.notAuthorized, function() {
            // Do here whatever you want
            $scope.message = 'Sorry, you need to auth..';
        });
        
        $rootScope.$on(Event.auth.loggedOut, function() {
            // Do here whatever you want
            $scope.message = 'Logged out successfully..';
        });

        $rootScope.$on(Event.auth.loggedIn, function() {
            // Do here whatever you want
            $scope.message = 'Logged in successfully..';
        });
    });
})(window.gateVideoControllersApp);
