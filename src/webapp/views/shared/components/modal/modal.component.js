(function() {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function() {
        var model = this;
        model.showModal = true;

        model.loginInfo = {
            maNumber: null,
            LastName: null
        };


        var authenticate = function(messageService, $http) {
            model.loading = true;
            $http.post("/Authenticate/Create", model.loginInfo)
                .success(function(data) {
                    //$uibModalInstance.close(data);
                    model.showModal = false;
                })
                .finally(function() {

                });
        }

        model.okClick = function() {
            authenticate();
        }
    };

    module.component('modal', {
        templateUrl: 'views/shared/components/modal/modal.component.html',
        controllerAs: 'model',
        controller : ['messageService', '$http', controller]
    });

}())