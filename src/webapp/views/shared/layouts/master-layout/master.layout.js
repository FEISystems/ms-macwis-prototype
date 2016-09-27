(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    module.component('masterLayout', {
        templateUrl: "views/shared/layouts/master-layout/master.layout.html",
        transclude : true
    })
}())