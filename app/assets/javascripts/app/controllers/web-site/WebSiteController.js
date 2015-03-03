'use strict';

(function(app){
    app.controller('WebSiteController', function($scope, $rootScope, $log, WebSite, Event, $timeout) {
        $scope.messages = $rootScope.messages || [];
        $scope.webSites = WebSite.load();
        $scope.webSite = {name: '', url: '', description: ''};
        
        $scope.webSites.then(function(data) {
            $scope.webSites = data.data;
        });
        
        $scope.create = function() {
            WebSite.create($scope.webSite).then(function(data) {
                $scope.messages.push(data.message);
            });
        };
    });
})(window.gateVideoControllersApp);
