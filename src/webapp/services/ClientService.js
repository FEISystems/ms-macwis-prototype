(function() {
    
    var client = function($http) {
        
        var getClient = function (id) {
            return $http.get("/Client/Index/?Id=" + id)
                .then(function(response) {
                    return response.data;
                });            
        }

        return {
            getClient : getClient
        };
    }

    var module = angular.module("macwisWebApp");
    module.factory("client", client);
}())