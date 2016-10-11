(function () {
    "use strict";
    var module = angular.module("macwisWebApp", ['ui.bootstrap', "ngComponentRouter"]);
    window.document.title = 'MS Prototype';
    module.value("$routerRootComponent", "macwisWebApp");

    var controller = function (roleService) {
        var model = this;
        model.$onInit = function () {
            //Do Something
        }
    };

    module.component("macwisWebApp", {
        controller: controller,
        bindings: {
            userRole: "@"
        },
        template: '<master-layout>' +
                        '<ng-outlet style="display: block"></ng-outlet>' +
                    '</master-layout>'
            ,
        $routeConfig: [
            { path: '/home', component: 'home', name: 'Home' },
            { path: '/providers', redirectTo: ['ProviderSearch'], name: 'Providers' },
            { path: '/providers/search', component: 'providerSearch', name: 'ProviderSearch' },
            { path: '/around', redirectTo: ['AroundProviderSearch'], name: 'AroundProviders' },
            { path: '/around/search', component: 'aroundProviderSearch', name: 'AroundProviderSearch' },
            { path: '/help', component: 'help', name: 'Help' },
            { path: '/**', redirectTo: ['Home'] }
    ]
    });

    module.directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });
    
                    event.preventDefault();
                }
            });
        };
    });

}());


function getSrv(name, element) {
    element = element || '*[ng-app]';
    return angular.element(element).injector().get(name);
}

//Dealing with IE compatibility
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.toTitleCase) {
    String.prototype.toTitleCase = function(){
      return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };
}

