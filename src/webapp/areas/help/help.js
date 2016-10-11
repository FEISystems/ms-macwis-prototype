(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "Help";
    };


    module.component("help", {
        templateUrl: "areas/help/help.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())