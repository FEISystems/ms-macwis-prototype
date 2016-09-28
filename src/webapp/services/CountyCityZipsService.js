(function() {
    
    var countyCityZipsService = function($resource) {
        return $resource('data/providers/CountyCityZips.json');
    }

    var module = angular.module("macwisWebApp");
    module.factory("countyCityZipsService", countyCityZipsService);
}());