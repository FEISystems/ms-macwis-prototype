(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "Home";
    };

    module.component("home", {
        templateUrl: "Areas/home/home.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())