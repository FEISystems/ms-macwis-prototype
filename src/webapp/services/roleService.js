(function () {

    var roleService = function ($rootScope, $log) {
        var _role = "";
        var setRole = function (role) {
            _role = role;
            console.log(_role + " role set");
        }

        var getRole = function () {
            console.log("role " + _role + " returned");
            return _role;
        }


        return {
            setRole: setRole,
            getRole: getRole
        };
    };

    var module = angular.module("macwisWebApp");
    module.factory("roleService", roleService);
}());