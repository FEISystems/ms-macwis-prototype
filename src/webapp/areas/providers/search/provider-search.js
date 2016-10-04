(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    module.filter('paging', function () {
        return function (lists, start) {
            return lists.slice(start);
        };
    });
    var controller = function ($scope, $rootScope, providerService, dataService, queueService, googleMapService) {
        //init start
        $scope.title = "Provider Search";
        $scope.Criteria = {};
        $scope.sortData = { up: true };
        $scope.provider = {};
        $scope.Cities = dataService.getCities();
        $scope.Counties = dataService.getCounties();
        $scope.ProviderTypes = dataService.getProviderTypes();

        $scope.Rates = dataService.getRates();

        $scope.Ages = dataService.ages;

        $scope.Genderes = [
            {
                "Id": "Boy",
                "Name": "Boy"
            },
            {
                "Id": "Girl",
                "Name": "Girl"
            },
            {
                "Id": "Both",
                "Name": "Both"
            }
        ];

        //  $scope.CanTakeBehavioralChildren = dataService.canTakeBehavioralChildrenes;
        $scope.CanTakeBehavioralChildrens = dataService.canTakeBehavioralChildrenes;

        $scope.AllProviders = providerService.getAllProviders();

        $scope.SortByes = [
            {
                "Id": "ProviderName",
                "Name": "Provider Name"
            },
            {
                "Id": "ProviderTypeDescription",
                "Name": "Provider Type"
            },
            {
                "Id": "PhysicalCity",
                "Name": "City"
            },
            {
                "Id": "CountyName",
                "Name": "County Name"
            },
            {
                "Id": "QualityRating",
                "Name": "Rate"
            }
        ];
        $scope.filteredProviders = [];
        // init end

        $scope.showProviderDetails = false;

        $scope.showDetails = function (provider) {
            $scope.showProviderDetails = true;
            $scope.provider = provider;
        };

        $scope.clickOk = function (provider) {
            $scope.showProviderDetails = false;
        };
        $scope.search = function() {
            $scope.filteredProviders = [];
            var tempProviders = [];
            $scope.sortData = { up: false, sortField: "QualityRating" };
            if ($scope.Criteria.address && $scope.Criteria.distince) {
                googleMapService.getCoordinateByAddress($scope.Criteria.address, function(coordinate) {
                    tempProviders = providerService.getProvidersByDistince(coordinate.lat, coordinate.lng, $scope.Criteria.distince);
                    $scope.searchByCriteria(tempProviders);
                }, function(error) {
                    alert(error);
                });
            } else {
                tempProviders = $scope.AllProviders;
                $scope.searchByCriteria(tempProviders);
            };
            $scope.setPage = function(num) {
                if (num === -1) {
                    if (isNaN($("#GoPage").val()))
                        num = 0;
                    else if ($("#GoPage").val() <= $scope.pages)
                        num = $("#GoPage").val() - 1;
                    else num = $scope.pages - 1;
                }
                if (num < 0)
                    num = 0;
                $scope.currentPage = num;
                $scope.InitPages();
            };

            $scope.prevPage = function() {
                if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                }
                $scope.InitPages();
            };
            $scope.nextPage = function() {
                if ($scope.currentPage < $scope.pages - 1) {
                    $scope.currentPage++;
                }
                $scope.InitPages();
            };
            $scope.firstPage = function() {
                $scope.currentPage = 0;
                $scope.InitPages();
            };

            $scope.lastPage = function() {
                $scope.currentPage = $scope.pages - 1;
                $scope.InitPages();
            };

        };

        $scope.searchByCriteria = function(tempProviders) {

            if (!$scope.Criteria || $scope.Criteria.ProviderName ||
                $scope.Criteria.ProviderType || $scope.Criteria.City || $scope.Criteria.County ||
                ($scope.Criteria.Rate || $scope.Criteria.Rate === 0) ||
                $scope.Criteria.Age || $scope.Criteria.Gender || $scope.Criteria.CanTakeBehavioralChildren) {
                angular.forEach(tempProviders, function (provider) {
                    var nameFound = true;
                    if ($scope.Criteria.ProviderName) {
                        var inputName = $scope.Criteria.ProviderName.toLowerCase();
                        var providerName = provider.ProviderName.toLowerCase();
                        var results = providerName.search(inputName);
                        if (results >= 0) {
                            nameFound = true;
                        } else {
                            nameFound = false;
                        }
                    }
                    if (nameFound &&
                    (!$scope.Criteria.ProviderType || ($scope.Criteria.ProviderType && $scope.Criteria.ProviderType === provider.ProviderType)) &&
                    (!$scope.Criteria.City || ($scope.Criteria.City && $scope.Criteria.City === provider.PhysicalCity)) &&
                    (!$scope.Criteria.County || ($scope.Criteria.County && $scope.Criteria.County === provider.CountyNumber)) &&
                    ($scope.Criteria.Rate === undefined || $scope.Criteria.Rate === null || $scope.Criteria.Rate === provider.QualityRating) &&
                    (!$scope.Criteria.Age || ($scope.Criteria.Age
                        && dataService.getAgeById($scope.Criteria.Age) && dataService.getAgeById($scope.Criteria.Age)[0] >= provider.MinAge
                        && dataService.getAgeById($scope.Criteria.Age)[1] <= provider.MaxAge)) &&
                    (!$scope.Criteria.Gender || ($scope.Criteria.Gender && $scope.Criteria.Gender === provider.Gender)) &&
                    (!$scope.Criteria.CanTakeBehavioralChildren ||
                    ($scope.Criteria.CanTakeBehavioralChildren && dataService.getCanTakeBehavioralChildrenById($scope.Criteria.CanTakeBehavioralChildren) === provider.CanTakeChildrenWithBehavioralProblems))) {
                        $scope.filteredProviders.push(provider);
                    }
                });
            } else {
                $scope.filteredProviders = tempProviders;
            };
            $scope.sort();

            if ($scope.filteredProviders.length > 0)
                $(".result-pagination").show();
            $scope.currentPage = 0;
            $scope.listsPerPage = $scope.ItemsPerPageList[0];
            $scope.providersCount = $scope.filteredProviders.length;
            if ($("#selectPerPage option:selected").text()) {
                $scope.currentPage = 0;
                $scope.pages = Math.ceil($scope.providersCount / $("#selectPerPage option:selected").text());
            } else
                $scope.pages = Math.ceil($scope.providersCount / $scope.listsPerPage);
            $scope.pageNum = [];
            $scope.InitPages();
        };
        $scope.InitPages = function () {
            $scope.pageNum = [];
            for (var i = 0; i < $scope.pages; i++) {
                if ($scope.currentPage <= 5) {
                    if (i < 10) {
                        $scope.pageNum.push(i);
                    }
                } else if ($scope.currentPage >= $scope.pages - 5) {
                    if (i >= $scope.pages - 10) {
                        $scope.pageNum.push(i);
                    }
                } else {
                    if (i <= $scope.currentPage + 5 && i >= $scope.currentPage - 4) {
                        $scope.pageNum.push(i);
                    }
                }
            }
        };
        $scope.ChangeDisplayNums = function () {
            if ($("#selectPerPage option:selected").text()) {
                $scope.currentPage = 0;
                $scope.pages = Math.ceil($scope.providersCount / $("#selectPerPage option:selected").text());
            }
            $scope.listsPerPage = $("#selectPerPage option:selected").text(); 
            $scope.InitPages();
        };
        $scope.ItemsPerPageList = ['10', '20', '30'];
        $scope.clear = function () {
            $scope.Criteria = {};
        };
        $scope.sort = function () {
            if ($scope.sortData && $scope.sortData.sortField && $scope.filteredProviders) {
                if ($scope.sortData.sortField === "QualityRating") {
                    $scope.filteredProviders = _.orderBy($scope.filteredProviders, [$scope.sortData.sortField], ['asc']);
                } else {
                    $scope.filteredProviders = _.sortBy($scope.filteredProviders, $scope.sortData.sortField);
                }
            }
            if (!$scope.sortData.up) {
                $scope.filteredProviders = _.reverse($scope.filteredProviders);
            }
            $scope.ChangeDisplayNums();
        };
        $scope.up = function () {
            $scope.sortData.up = !$scope.sortData.up;
            $scope.filteredProviders = _.reverse($scope.filteredProviders);
        };
        
        $scope.$watch(function() { return angular.element("#providerSearchButton").is(':visible') }, function() {
            var criteria = queueService.getMsg('homeSearchCriteria');
            if (!criteria)
                return;
            
            var criteriaFromHomePage = {
                ProviderName : criteria.providerName,
                ProviderType : criteria.providerType,
                City : criteria.city,
                County : criteria.county,
                Rate : criteria.rate,
                address: criteria.zipCode,
                distince : criteria.radius,
                providerName : criteria.ProviderName
            };
            $scope.Criteria.ProviderType = criteria.providerType;
            $scope.Criteria.ProviderName = criteria.providerName;
            $scope.Criteria.City = criteria.city;
            $scope.Criteria.County = criteria.county;
            $scope.Criteria.Rate = criteria.rate;
            $scope.Criteria.Address = criteria.zipCode;
            $scope.Criteria.distince = criteria.radius;

            queueService.setMsg('homeSearchCriteria', null);
            $scope.search();
            
        });
    };

    module.component("providerSearch", {
        templateUrl: "Areas/providers/search/provider-search.html",
        controllerAs: "model",
        controller: ["$scope", "$scope", "providerService","dataService", 'queueService', 'googleMapService',controller]
    });
}())