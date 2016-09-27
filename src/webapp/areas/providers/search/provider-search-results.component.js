(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "Search Results";

        model.showProviderDetails = false;

        model.showDetails = function () {
            model.showProviderDetails = true;
        }
    };



    module.component("providerSearchResults", {
        templateUrl: "Areas/providers/search/provider-search-results.component.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())