(function() {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, messageService, roleService, $location) {
        var model = this;
        model.data = {};
        model.brandName = 'MACWIS';
        model.showNavMenu = true;
        model.$onInit = function(){
            //model.role = roleService.getRole();
            //if (model.role == 'provideradmin') model.brandName = 'Provider';
            //if (model.role == 'isasadmin') model.brandName = 'ISAS';
            //messageService.subscribe("loginSuccess", function(data) {
            //    //now let's update our model
            //    model.data = data;
            //});
        }
        
        model.onClick = function(){
            model.data = {};
            messageService.publish("logout", {});
        }


    //if (model.role == 'isasadmin' || model.role == 'provideradmin') {

        $scope.menuItems = [
            {
                'name': 'Home',
                'link': ['Home'],
                'path': 'home'
            },
            {
                'name': 'Find Providers',
                'link': ['ProviderSearch'],
                'path': 'providers'
            },
            {
                'name': 'Help',
                'link': ['Help'],
                'path': 'help'
            }
        ];


        var oldPath = $location.path(),
            newPathArray = oldPath.split('/'),
            newPath = newPathArray[1];

        model.activeClass = function (path) {

            var activeLink = (path === newPath);
            return activeLink;
        };

    //    model.showNavMenu = true;

    //    return
        //}
    }

    module.component("navbarHeader", {
        templateUrl: "views/shared/components/navbar-header/navbar-header.component.html",
        controllerAs: "model",
        controller  : ["$scope", "messageService","roleService", "$location", controller]
    });

}())