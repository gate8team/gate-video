'use strict';

(function(app){
    app.service('BasicModel', function($http) {
        var BasicModel = {};

        BasicModel.sendRequest = function(endpoint, successCallback, errorCallback) {
            var promise = $http[endpoint.type](endpoint.path, endpoint.data || {});
            (successCallback != null) && (promise = promise.success(successCallback));
            (errorCallback != null) && (promise = promise.error(errorCallback));
            return promise;
        };

        return BasicModel;
    });
})(window.gateVideoServicesApp);
