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
        var model = this;
        model.title = "Provider Search";
        model.Criteria = {};
        model.sortData = { up: true };
        model.provider = {};
        model.filteredProviders = [];
        // init end

        model.showProviderDetails = false;

        
        
        
        model.Cities = dataService.getCities();
        model.Counties = dataService.getCounties();
        model.ProviderTypes = dataService.getProviderTypes();
        model.Rates = dataService.getRates();
        model.Ages = dataService.ages;
        model.Genderes = dataService.getGenders();
        model.CanTakeBehavioralChildrens = dataService.canTakeBehavioralChildrenes;
        model.AllProviders = providerService.getAllProviders();
        model.SortByes = dataService.getSortTypes();
        model.showDetails = function (provider) {
            model.showProviderDetails = true;
            model.provider = provider;
        };

        model.clickOk = function (provider) {
            model.showProviderDetails = false;
        };
        model.search = function() {
            model.filteredProviders = [];
            var tempProviders = [];
            model.sortData = { up: false, sortField: "QualityRating" };
            if (model.Criteria.address && model.Criteria.distince) {
                googleMapService.getCoordinateByAddress(model.Criteria.address, function(coordinate) {
                    tempProviders = providerService.getProvidersByDistince(coordinate.lat, coordinate.lng, model.Criteria.distince);
                    model.searchByCriteria(tempProviders);
                }, function(error) {
                    alert(error);
                });
            } else {
                tempProviders = model.AllProviders;
                model.searchByCriteria(tempProviders);
            };
            model.setPage = function(num) {
                if (num === -1) {
                    if (isNaN($("#GoPage").val()))
                        num = 0;
                    else if ($("#GoPage").val() <= model.pages)
                        num = $("#GoPage").val() - 1;
                    else num = model.pages - 1;
                }
                if (num < 0)
                    num = 0;
                model.currentPage = num;
                model.InitPages();
            };

            model.prevPage = function() {
                if (model.currentPage > 0) {
                    model.currentPage--;
                }
                model.InitPages();
            };
            model.nextPage = function() {
                if (model.currentPage < model.pages - 1) {
                    model.currentPage++;
                }
                model.InitPages();
            };
            model.firstPage = function() {
                model.currentPage = 0;
                model.InitPages();
            };

            model.lastPage = function() {
                model.currentPage = model.pages - 1;
                model.InitPages();
            };

        };

        model.searchByCriteria = function(tempProviders) {

            if (!model.Criteria || model.Criteria.ProviderName ||
                model.Criteria.ProviderType || model.Criteria.City || model.Criteria.County ||
                (model.Criteria.Rate || model.Criteria.Rate === 0) ||
                model.Criteria.Age || model.Criteria.Gender || model.Criteria.CanTakeBehavioralChildren) {
                angular.forEach(tempProviders, function (provider) {
                    var nameFound = true;
                    if (model.Criteria.ProviderName) {
                        var inputName = model.Criteria.ProviderName.toLowerCase();
                        var providerName = provider.ProviderName.toLowerCase();
                        var results = providerName.search(inputName);
                        if (results >= 0) {
                            nameFound = true;
                        } else {
                            nameFound = false;
                        }
                    }
                    if (nameFound &&
                    (!model.Criteria.ProviderType || (model.Criteria.ProviderType && model.Criteria.ProviderType === provider.ProviderType)) &&
                    (!model.Criteria.City || (model.Criteria.City && model.Criteria.City === provider.PhysicalCity)) &&
                    (!model.Criteria.County || (model.Criteria.County && model.Criteria.County === provider.CountyNumber)) &&
                    (model.Criteria.Rate === undefined || model.Criteria.Rate === null || model.Criteria.Rate === provider.QualityRating) &&
                    (!model.Criteria.Age || (model.Criteria.Age
                        && dataService.getAgeById(model.Criteria.Age) && dataService.getAgeById(model.Criteria.Age)[0] >= provider.MinAge
                        && dataService.getAgeById(model.Criteria.Age)[1] <= provider.MaxAge)) &&
                    (!model.Criteria.Gender || (model.Criteria.Gender && model.Criteria.Gender === provider.Gender)) &&
                    (!model.Criteria.CanTakeBehavioralChildren ||
                    (model.Criteria.CanTakeBehavioralChildren && dataService.getCanTakeBehavioralChildrenById(model.Criteria.CanTakeBehavioralChildren) === provider.CanTakeChildrenWithBehavioralProblems))) {
                        model.filteredProviders.push(provider);
                    }
                });
            } else {
                model.filteredProviders = tempProviders;
            };
            model.sort();

            if (model.filteredProviders.length > 0)
                $(".result-pagination").show();
            model.currentPage = 0;
            model.listsPerPage = model.ItemsPerPageList[0];
            model.providersCount = model.filteredProviders.length;
            if ($("#selectPerPage option:selected").text()) {
                model.currentPage = 0;
                model.pages = Math.ceil(model.providersCount / $("#selectPerPage option:selected").text());
            } else
                model.pages = Math.ceil(model.providersCount / model.listsPerPage);
            model.pageNum = [];
            model.InitPages();
        };
        model.InitPages = function () {
            model.pageNum = [];
            for (var i = 0; i < model.pages; i++) {
                if (model.currentPage <= 5) {
                    if (i < 10) {
                        model.pageNum.push(i);
                    }
                } else if (model.currentPage >= model.pages - 5) {
                    if (i >= model.pages - 10) {
                        model.pageNum.push(i);
                    }
                } else {
                    if (i <= model.currentPage + 5 && i >= model.currentPage - 4) {
                        model.pageNum.push(i);
                    }
                }
            }
        };
        model.ChangeDisplayNums = function () {
            if ($("#selectPerPage option:selected").text()) {
                model.currentPage = 0;
                model.pages = Math.ceil(model.providersCount / $("#selectPerPage option:selected").text());
            }
            model.listsPerPage = $("#selectPerPage option:selected").text(); 
            model.InitPages();
        };
        model.ItemsPerPageList = ['10', '20', '30'];
        model.clear = function () {
            model.Criteria = {};
        };
        model.sort = function () {
            if (model.sortData && model.sortData.sortField && model.filteredProviders) {
                if (model.sortData.sortField === "QualityRating") {
                    model.filteredProviders = _.orderBy(model.filteredProviders, [model.sortData.sortField], ['asc']);
                } else {
                    model.filteredProviders = _.sortBy(model.filteredProviders, model.sortData.sortField);
                }
            }
            if (!model.sortData.up) {
                model.filteredProviders = _.reverse(model.filteredProviders);
            }
            model.ChangeDisplayNums();
        };
        model.up = function () {
            model.sortData.up = !model.sortData.up;
            model.filteredProviders = _.reverse(model.filteredProviders);
        };
        
        $scope.$watch(function() { return angular.element("#providerSearchButton").is(':visible') }, function() {
            var criteria = queueService.getMsg('homeSearchCriteria');
            if (!criteria)
            {
                model.search();
                return;
            }
            
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
            model.Criteria.ProviderType = criteria.providerType;
            model.Criteria.ProviderName = criteria.providerName;
            model.Criteria.City = criteria.city;
            model.Criteria.County = criteria.county;
            model.Criteria.Rate = criteria.rate;
            model.Criteria.Address = criteria.zipCode;
            model.Criteria.distince = criteria.radius;

            queueService.setMsg('homeSearchCriteria', null);
            model.search();
            
        });
    };

    module.component("providerSearch", {
        templateUrl: "Areas/providers/search/provider-search.html",
        controllerAs: "model",
        controller: ["$scope", "$scope", "providerService","dataService", 'queueService', 'googleMapService',controller]
    });
}())