(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, roleService, $rootScope) {
        var model = this;
        model.title = "Provider Search";      

    };


    module.component("providerSearchForm", {
        templateUrl: "Areas/providers/search/provider-search-form.component.html",
        controllerAs: "model",
        controller: ['$scope', 'roleService', '$rootScope', controller]

    });
}())