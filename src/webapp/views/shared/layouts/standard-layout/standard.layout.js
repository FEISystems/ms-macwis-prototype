(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    module.component('standardLayout', {
        templateUrl: "views/shared/layouts/standard-layout/standard.layout.html",
        transclude : true
    })
}())