(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, $rootScope) {
        var model = this;
         model.mapOptions = {
            center: new google.maps.LatLng(32.948596, -89.757820),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 7,
            styles : [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#EBE5E0"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]}]
        };

        model.$onInit = function () {
            var mapOptions = model.mapOptions;
            var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
        }
    };


    module.component("googleMap", {
        templateUrl: "views/shared/components/google-map/google-map.component.html",
        controllerAs: "model",
        controller: ["$scope", "$rootScope", controller]
    });
}())