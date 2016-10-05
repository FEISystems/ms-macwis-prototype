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
        $scope.filteredProviders = [];
        // init end

        $scope.showProviderDetails = false;

        
        
        
        $scope.Cities = dataService.getCities();
        $scope.Counties = dataService.getCounties();
        $scope.ProviderTypes = dataService.getProviderTypes();
        $scope.Rates = dataService.getRates();
        $scope.Ages = dataService.ages;
        $scope.Genderes = dataService.getGenders();
        $scope.CanTakeBehavioralChildrens = dataService.canTakeBehavioralChildrenes;
        $scope.AllProviders = providerService.getAllProviders();
        $scope.SortByes = dataService.getSortTypes();
        $scope.showDetails = function (provider) {

            $scope.
            $scope.showProviderDetails = true;
            $scope.provider = provider;
        };

        $scope.clickOk = function (provider) {
            $scope.showProviderDetails = false;
        };
        $scope.printprovider=function () {
            debugger;
            var selected = [];
            var htmlcode='';
            debugger
            $('div#checkboxes input[type=checkbox]').each(function() {
                if ($(this).is(":checked")) {
                    selected.push($(this).attr('id'));
                }
            });


            $.each(selected,function (index,value) {
                var TerValue=value.split(',')[16].split(':')[1].replace(/\"/g, "")=="true"?"Yes":"No";
                htmlcode =htmlcode+ "<table><tr><div class='modal-body pad-no'><div class='row'> <div class='col-xs-offset-1'> <div class='col-md-12'><p class='ng-binding'><strong>Provider Name: </strong> "+value.split(',')[1].split(':')[1].replace(/\"/g, "")+"</p></div>"+
                    "<div class='col-xs-4'><p class='ng-binding'><strong>Provider Type: </strong>  "+value.split(',')[4].split(':')[1].replace(/\"/g, "")+"</p> </div>"+
                    "<div class='col-xs-4'><p class='ng-binding'><strong>Phone#: </strong>  "+value.split(',')[10].split(':')[1].replace(/\"/g, "")+"</p><p class='ng-binding'> <strong>City: </strong>"+value.split(',')[6].split(':')[1].replace(/\"/g, "")+" </p><p class='ng-binding'><strong>Quality Star Rating: </strong>   Excellent  </p>  "+
                    "<p class='ng-binding'><strong>License Type: </strong>   "+value.split(',')[2].split(':')[1].replace(/\"/g, "")+" </p>"+
                    "<p ng-show='provider.CanTakeChildrenWithBehavioralProblems===true' class='ng-hide'><strong>Accepts subsidized child care: </strong>"+ TerValue +"</p>" +
                    "<p ng-show='provider.CanTakeChildrenWithBehavioralProblems===false' class=''></p>"+
                    "<p ng-show='provider.CanTakeChildrenWithBehavioralProblems!==false&amp;&amp; provider.CanTakeChildrenWithBehavioralProblems!==true' class='ng-binding ng-hide'></p>  </div>"+
                    " <div class='col-xs-4'><p class='ng-binding'><strong>County: </strong>  "+value.split(',')[9].split(':')[1].replace(/\"/g, "")+"</p>"+
                    "<p class='ng-binding'><strong>Zip Code: </strong> "+value.split(',')[7].split(':')[1].replace(/\"/g, "")+"</p>"+
                    "    <p class='ng-binding'><strong>Provider Capacity: </strong> "+value.split(',')[5].split(':')[1].replace(/\"/g, "")+"</p>"+
                    "<p class='ng-binding'><strong>Age Range: </strong> "+value.split(',')[13].split(':')[1].replace(/\"/g, "")+" to "+value.split(',')[14].split(':')[1].replace(/\"/g, "")+"  </p>"+
                    "<p class='ng-binding'><strong>Gender: </strong> "+value.split(',')[15].split(':')[1].replace(/\"/g, "")+" </p></div></div></div></div></tr></table><hr/>";

            });
            // htmlcode=htmlcode+'</table>';
            if ($('div#checkboxes input[type=checkbox]').is(":checked")) {
                var popupWin = window.open('', '_blank', 'width=3000,height=3000');
                popupWin.document.open();
                popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="scripts/vendor/bootstrap-3.3.7-dist/css/bootstrap.css" /></head><body onload="window.print()">' + htmlcode + '</body></html>');
                popupWin.document.close();
            }
            else
            {
                return false;
            }

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
               $("#lblSelect").show();
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
            {
                $scope.search();
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