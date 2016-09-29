(function () {

    var dataService = function () {
        var ages =[
            {
                "Id": 1,
                "Name": "Infant(Under 12 months)"
            },
            {
                "Id": 2,
                "Name": "Toddler(12 to under 24 months)"
            },
            {
                "Id": 3,
                "Name": "2 years"
            },
            {
                "Id": 4,
                "Name": "3 years"
            },
            {
                "Id": 5,
                "Name": "4 years"
            },
            {
                "Id": 6,
                "Name": "5-9 years"
            },
            {
                "Id": 7,
                "Name": "10-12 years"
            }];
        var getAgeById = function(id) {
            var result = [];
            switch (id) {
            case 1:
                result = [0, 0];
                break;
            case 2:
                result = [1, 1];
                break;
            case 3:
                result = [2, 2];
                break;
            case 4:
                result = [3, 3];
                break;
            case 5:
                result = [4, 4];
                break;
            case 6:
                result = [5, 9];
                break;
            case 7:
                result = [10.12];
                break;
            default:
                console.log("can't get age by id: " + id);
                break;
            }
            return result;
        };

        var canTakeBehavioralChildrenes = [
            {
                "Id": 1,
                "Name": "Yes"
            },
            {
                "Id": 2,
                "Name": "No"
            }
        ];
        var getCanTakeBehavioralChildrenById = function(id) {
            var result = null;
            switch (id) {
            case 1:
                result = true;
                break;
            case 2:
                result = false;
                break;
            default:
                console.log("can't get CanTakeBehavioralChildren by id: " + id);
                break;
            }
            return result;
        };

        return {
            ages: ages,
            getAgeById: getAgeById,
            canTakeBehavioralChildrenes: canTakeBehavioralChildrenes,
            getCanTakeBehavioralChildrenById: getCanTakeBehavioralChildrenById
        };
    };

    var module = angular.module("macwisWebApp");
    module.factory("dataService", dataService);
}());