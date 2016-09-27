(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function (roleService) {
        var model = this;

        model.$onInit = function () {
            model.show = false;
        }
        
        model.clickOk = function () {
            model.show = false;
        }

        model.showDetails = function () {
            model.show = true;
        }
    };

    module.component('providerDetails', {
        templateUrl: 'Areas/providers/provider/provider-details.component.html',
        controllerAs: 'model',
        controller: ['roleService', controller],
        bindings: {
            show: '=',
            provider: '='
        }
    });

}())