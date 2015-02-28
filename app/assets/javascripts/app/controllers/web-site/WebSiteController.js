'use strict';

(function(app){
    app.controller('WebSiteController', function($scope, $rootScope, $log, WebSite, Event) {
        $scope.webSites = WebSite.load();
        
        $scope.webSites.then(function(data) {
            $scope.webSites = data.data;
        });
    });
})(window.gateVideoControllersApp);
