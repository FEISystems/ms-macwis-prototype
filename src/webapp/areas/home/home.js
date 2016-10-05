(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, dataService, queueService, $location) {
        var model = this;
        model.provider = {};
        model.criteria = {};
        model.providerTypes = dataService.getProviderTypes();
        model.cities = dataService.getCities();
        model.counties = dataService.getCounties();
        model.rates = dataService.getRates();
        model.title = "Home";
        model.homePageImageUrl = "img/macwis-homepage-img.jpg";

        model.onClick = function () {
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