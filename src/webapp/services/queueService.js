(function() {

    var queueService = function($rootScope, $log) {

        var messages = {};

        var setMsg = function(name, data)
        {
            messages[name] = data;
        }

        var getMsg = function(name)
        {
            return messages[name];
        }
        return {
            setMsg: setMsg,
            getMsg: getMsg
        };
    };

    var module = angular.module("macwisWebApp");
    module.factory("queueService", queueService);
}());