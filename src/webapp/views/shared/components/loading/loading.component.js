(function() {
    "use strict";
    var module = angular.module("macwisWebApp");
    var controller = function (messageService, $scope, $timeout) {
        var model = this;
        model.showModal = false;

        model.$onInit = function() {
            messageService.subscribe("showloading", function (value) {
                var updateModal = function(v) {
                    if (v == true)
                        model.showModal = true;
                    else {
                        model.showModal = false;
                    }
                };
                $timeout(updateModal(value), 1);
            });            
        }
    }

    module.component("loading", {
        templateUrl: "views/shared/components/loading/loading.component.html",
        controllerAs: 'model',
        controller: ["messageService", "$scope", "$timeout", controller]
    });

}())