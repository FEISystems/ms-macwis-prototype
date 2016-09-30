(function () {

    var googleMapService = function ($http) {

        var geocodeUrl = "https://maps.google.com/maps/api/geocode/json";
        var publicKey = "AIzaSyAMAlk7Y1jfEG-97LQYaZtuF5b2bZeOLk8";

        var getCoordinateByAddress = function (address,success,error) {
            $http.get(geocodeUrl + "?key=" + publicKey + "&address=" + address).success(function (response) {
                if ("OK" == response.status) {
                    console.log(response);
                    if (0 == response.results.length) {
                        error("no result, please correct your address!");
                    }else {
                        success(response.results[0].geometry.location);
                    }
                } else {
                    error(response.status);
                }
                //success(response);
            }).error(function(response) {
                error(response.status);
                //console.log(response);
            });
        };

        return {
            getCoordinateByAddress: getCoordinateByAddress
        };
    };

    var module = angular.module("macwisWebApp");
    module.factory("googleMapService", googleMapService);
}());