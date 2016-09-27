(function() {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function(messageService, $interval, $scope) {
        var model = this;
        model.msg = null;

        model.progressValue = 100;   
        model.opacity = 1;       
        var interval = 5000;
        model.$onInit = function() {
            if (model.interval)
                interval = model.interval * 1;
            messageService.subscribe('showError', function(msg) {
                model.updateMessage(msg);
                var decrement = (100 / interval) * 100;
                var updateProgressBar = $interval(function() {
                    model.progressValue -= 1;
                    model.opacity = model.progressValue / 100;
                    if (model.progressValue == 0) {
                        model.updateMessage(null);
                        $interval.cancel(updateProgressBar);
                        model.progressValue = 100;            
                        model.opacity = 1;            
                    }
                }, interval/100);
                

                
            });
        }
        model.updateMessage = function(msg) {
            model.msg = msg;           
        }

          
    }

    module.component("errorHandler", {
        templateUrl : "views/shared/components/error-handler/error-handler.component.html",
        controllerAs: 'model',
        controller  : ["messageService", "$interval", "$scope", controller],
        bindings    : {
            interval        : '<',
            updateMessage   : '&'
        }
    });
}())