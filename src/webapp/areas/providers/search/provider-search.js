(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, $rootScope) {
        var model = this;
        model.title = "Provider Search";
        //model.showResultsType = "claims";


        //$rootScope.$on('toggleSearchByResults', function (event, data) {
        //    model.showResultsType = data;
        //});
        
    };


    module.component("providerSearch", {
        templateUrl: "Areas/providers/search/provider-search.html",
        controllerAs: "model",
        controller: ["$scope", "$rootScope", controller]

    });
}())