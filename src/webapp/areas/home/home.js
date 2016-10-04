(function () {
    "use strict";
    var module = angular.module("macwisWebApp");
    
    var controller = function ($scope, dataService, queueService) {
        var model = this;
        model.provider = {};
        model.criteria = {};
        model.providerTypes = dataService.getProviderTypes();  
        model.cities = dataService.getCities();
        model.counties = dataService.getCounties();
        model.rates = dataService.getRates();       
        model.title = "Home";

        model.onClick = function(){
            queueService.setMsg('homeSearchCriteria', model.criteria);
        }
    };

    module.component("home", {
        templateUrl: "Areas/home/home.html",
        controllerAs: "model",
        controller: ["$scope", "dataService", "queueService", controller]

    });
}())