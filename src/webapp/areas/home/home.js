(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, dataService, queueService, $location) {
        var model = this;
        model.provider = {};
        model.criteria = {};
        model.providerTypes = dataService.getProviderTypes();
        model.cities = dataService.titleCaseData(dataService.getCities());
        model.counties = dataService.titleCaseData(dataService.getCounties(), "Name");
        model.rates = dataService.getRates();
        model.title = "Home";
        model.homePageImageUrl = "img/macwis-homepage-img.jpg";

        model.onClick = function () {
            /************
             * The elements from the home.html template are bound to the model.criteria object
             * upon the click event, the search criteria selected will load the provider search page
             * and dequeue the search criteria while using it for the search upon render showing the results
             * there is a mapping to the elements that are in the provider search page inside of the render method
             * of the provider search button
             * ************ */
    
            queueService.setMsg('homeSearchCriteria', model.criteria);
        }

        model.setActiveTab = function ($event) {
            var elem = $event.currentTarget;
            $(".searchTab").removeClass("activeTab");
            $(elem).addClass("activeTab");
            console.log(elem);
        }

    };

    module.component("home", {
        templateUrl: "Areas/home/home.html",
        controllerAs: "model",
        controller: ["$scope", "dataService", "queueService", "$location", controller]

    });
}())