(function () {

    var calculatorService = function () {
        var numAdd = function (num1, num2) {
            var baseNum, baseNum1, baseNum2;
            try {
                baseNum1 = num1.toString().split(".")[1].length;
            } catch (e) {
                baseNum1 = 0;
            }
            try {
                baseNum2 = num2.toString().split(".")[1].length;
            } catch (e) {
                baseNum2 = 0;
            }
            baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
            return (num1 * baseNum + num2 * baseNum) / baseNum;
        };
        var numSub = function (num1, num2) {
            var baseNum, baseNum1, baseNum2;
            var precision;
            try {
                baseNum1 = num1.toString().split(".")[1].length;
            } catch (e) {
                baseNum1 = 0;
            }
            try {
                baseNum2 = num2.toString().split(".")[1].length;
            } catch (e) {
                baseNum2 = 0;
            }
            baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
            precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
            return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
        };
        var numMul = function (num1, num2) {
            var baseNum = 0;
            try {
                baseNum += num1.toString().split(".")[1].length;
            } catch (e) {
            }
            try {
                baseNum += num2.toString().split(".")[1].length;
            } catch (e) {
            }
            return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
        };
        var numDiv = function (num1, num2) {
            var baseNum1 = 0, baseNum2 = 0;
            var baseNum3, baseNum4;
            try {
                baseNum1 = num1.toString().split(".")[1].length;
            } catch (e) {
                baseNum1 = 0;
            }
            try {
                baseNum2 = num2.toString().split(".")[1].length;
            } catch (e) {
                baseNum2 = 0;
            }

            baseNum3 = Number(num1.toString().replace(".", ""));
            baseNum4 = Number(num2.toString().replace(".", ""));
            return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);

        };

        var getDistinceByCoordinate = function (lat1, lng1, lat2, lng2) {

            var lat = [lat1, lat2];
            var lng = [lng1, lng2];
            var R = 6378137;
            var dLat = (lat[1] - lat[0]) * Math.PI / 180;
            var dLng = (lng[1] - lng[0]) * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d;//unit is m
        }

        return {
            numAdd: numAdd,
            numSub: numSub,
            numMul: numMul,
            numDiv: numDiv,
            getDistinceByCoordinate: getDistinceByCoordinate
        };
    };

    var module = angular.module("macwisWebApp");
    module.factory("calculatorService", calculatorService);
}());