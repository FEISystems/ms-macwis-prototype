(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "Search Results";

        model.showProviderDetails = false;

        model.showDetails = function (provider) {
            model.showProviderDetails = true;
            model.provider = provider;
        }
    };

    module.component("providerSearchResults", {
        templateUrl: "Areas/providers/search/provider-search-results.component.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())