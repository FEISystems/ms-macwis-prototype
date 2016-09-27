(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    module.filter('paging', function () {
        return function (lists, start) {
            return lists.slice(start);
        };
    });
    var controller = function ($scope, $rootScope, providerService, googleMapService) {
        //init start
        $scope.location = {
            lat: 32.3546679,
            lng: -89.3985283,
            distince: 5,
            address:"Mississippi"
        };

        $scope.title = "Find Around Provider";
        $scope.Criteria = {};
        $scope.sortData = { up: true };
        $scope.provider = {};
        $scope.Cities = [
             "ABBEVILLE", "ABERDEEN", "ACKERMAN", "ALLIGATOR", "AMORY", "ANGUILLA", "ARCOLA", "ARTESIA", "ASHLAND", "BAILEY", "BALDWYN", "BASSFIELD", "BATESVILLE", "BAY SAINT LOUIS", "BAY SPRINGS", "BAY ST LOUIS", "BEAUMONT", "BELMONT", "BELZONI", "BENOIT", "BENTON", "BENTONIA", "BEULAH", "BILOXI", "BLUE MOUNTAIN", "BLUE SPRINGS", "BOGUE CHITTO", "BOLTON", "BOONEVILLE", "BOYLE", "BRANDON", "BROOKHAVEN", "BROOKLYN", "BROOKSVILLE", "BRUCE", "BUCKATUNNA", "BUDE", "BYHALIA", "BYRAM", "CALEDONIA", "CALHOUN CITY", "CAMDEN", "CANTON", "CARRIERE", "CARTHAGE", "CARY", "CEDARBLUFF", "CENTREVILLE", "CHARLESTON", "CHOCTAW", "CLARKSDALE", "CLEVELAND", "CLINTON", "COAHOMA", "COFFEEVILLE", "COILA", "COLDWATER", "COLLINS", "COLLINSVILLE", "COLUMBIA", "COLUMBUS", "COMO", "CONEHATTA", "CORINTH", "CRAWFORD", "CRENSHAW", "CROSBY", "CROWDER", "CRUGER", "CRYSTAL SPGS", "CRYSTAL SPRINGS", "D LO", "DE KALB", "DECATUR", "DERMA", "DIAMONDHEAD", "DIBERVILLE", "DREW", "DUCK HILL", "DUNCAN", "DUNDEE", "DURANT", "ECRU", "EDWARDS", "ELLISVILLE", "ENTERPRISE", "ETHEL", "EUPORA", "FAYETTE", "FITLER", "FLORA", "FLORENCE", "FLOWOOD", "FOREST", "FOXWORTH", "FRIARS POINT", "FULTON", "GAUTIER", "GEORGETOWN", "GLEN ALLAN", "GLENDORA", "GLOSTER", "GOLDEN", "GOODMAN", "GREENVILLE", "GREENWOOD", "GREENWOOD SPRINGS", "GRENADA", "GULFPORT", "GUNNISON", "GUNTOWN", "HAMILTON", "HARRISVILLE", "HATTIESBURG", "HAZLEHURST", "HEIDELBERG", "HERMANVILLE", "HERNANDO", "HICKORY", "HICKORY FLAT", "HOLLANDALE", "HOLLY SPRINGS", "HORN LAKE", "HOULKA", "HOUSTON", "INDIANOLA", "INVERNESS", "ISOLA", "ITTA BENA", "IUKA", "JACKSON", "JAYESS", "JONESTOWN", "KILMICHAEL", "KILN", "KOKOMO", "KOSCIUSKO", "LAKE", "LAKE CORMORANT", "LAMAR", "LAMBERT", "LAUDERDALE", "LAUREL", "LAWRENCE", "LEAKESVILLE", "LELAND", "LENA", "LEXINGTON", "LIBERTY", "LONG BEACH", "LORMAN", "LOUIN", "LOUISE", "LOUISVILLE", "LUCEDALE", "LUDLOW", "LULA", "LUMBERTON", "LYON", "MABEN", "MACON", "MADISON", "MAGEE", "MAGNOLIA", "MANTACHIE", "MARIETTA", "MARION", "MARKS", "MC COOL", "MCCOMB", "MEADVILLE", "MENDENHALL", "MERIDIAN", "METCALFE", "MICHIGAN CITY", "MIZE", "MONTICELLO", "MOOREVILLE", "MOORHEAD", "MORGAN CITY", "MORTON", "MOSELLE", "MOSS POINT", "MOUND BAYOU", "MOUNT OLIVE", "MYRTLE", "NAS MERIDIAN", "NATCHEZ", "NESBIT", "NETTLETON", "NEW ALBANY", "NEW AUGUSTA", "NEWHEBRON", "NEWTON", "NOXAPATER", "OAKLAND", "OCEAN SPRINGS", "OKOLONA", "OLIVE BRANCH", "OSYKA", "OXFORD", "PACHUTA", "PANTHER BURN", "PASCAGOULA", "PASS CHRISTIAN", "PATTISON", "PAULDING", "PEARL", "PELAHATCHIE", "PERKINSTON", "PETAL", "PHEBA", "PHILADELPHIA", "PICAYUNE", "PICKENS", "PINOLA", "PITTSBORO", "PONTOTOC", "POPE", "POPLARVILLE", "PORT GIBSON", "PORTERVILLE", "POTTS CAMP", "PRAIRIE", "PRENTISS", "PRESTON", "PURVIS", "QUITMAN", "RAYMOND", "RENA LARA", "RICHLAND", "RICHTON", "RIDGELAND", "RIENZI", "RIPLEY", "ROBINSONVILLE", "ROLLING FORK", "ROME", "ROSE HILL", "ROSEDALE", "ROXIE", "RULEVILLE", "SALLIS", "SALTILLO", "SARAH", "SARDIS", "SAUCIER", "SCHLATER", "SCOOBA", "SCOTT", "SENATOBIA", "SHANNON", "SHAW", "SHELBY", "SHUBUTA", "SHUQUALAK", "SIDON", "SILVER CITY", "SILVER CREEK", "SLEDGE", "SMITHDALE", "SONTAG", "SOSO", "SOUTHAVEN", "STARKVILLE", "STATE LINE", "STENNIS SPACE CENTER", "STONEWALL", "STOVALL", "SUMMIT", "SUMNER", "SUMRALL", "SUNFLOWER", "TAYLORSVILLE", "TCHULA", "TERRY", "TILLATOBA", "TIPLERSVILLE", "TOOMSUBA", "TUNICA", "TUPELO", "TUTWILER", "TYLERTOWN", "UNION", "UNION CHURCH", "UTICA", "VAIDEN", "VANCLEAVE", "VAUGHAN", "VERONA", "VICKSBURG", "VOSSBURG", "WALLS", "WALNUT", "WALNUT GROVE", "WATER VALLEY", "WAVELAND", "WAYNESBORO", "WEBB", "WEIR", "WESSON", "WEST", "WEST POINT", "WIGGINS", "WINONA", "WINSTONVILLE", "WOODLAND", "WOODVILLE", "YAZOO CITY"
        ];
        $scope.Counties = [
            {
                "Id": 1,
                "Name": "ADAMS"
            },
            {
                "Id": 2,
                "Name": "ALCORN"
            },
            {
                "Id": 3,
                "Name": "AMITE"
            },
            {
                "Id": 4,
                "Name": "ATTALA"
            },
            {
                "Id": 5,
                "Name": "BENTON"
            },
            {
                "Id": 6,
                "Name": "BOLIVAR"
            },
            {
                "Id": 7,
                "Name": "CALHOUN"
            },
            {
                "Id": 8,
                "Name": "CARROLL"
            },
            {
                "Id": 9,
                "Name": "CHICKASAW"
            },
            {
                "Id": 10,
                "Name": "CHOCTAW"
            },
            {
                "Id": 11,
                "Name": "CLAIBORNE"
            },
            {
                "Id": 12,
                "Name": "CLARKE"
            },
            {
                "Id": 13,
                "Name": "CLAY"
            },
            {
                "Id": 14,
                "Name": "COAHOMA"
            },
            {
                "Id": 15,
                "Name": "COPIAH"
            },
            {
                "Id": 16,
                "Name": "COVINGTON"
            },
            {
                "Id": 17,
                "Name": "DESOTO"
            },
            {
                "Id": 18,
                "Name": "FORREST"
            },
            {
                "Id": 19,
                "Name": "FRANKLIN"
            },
            {
                "Id": 20,
                "Name": "GEORGE"
            },
            {
                "Id": 21,
                "Name": "GREENE"
            },
            {
                "Id": 22,
                "Name": "GRENADA"
            },
            {
                "Id": 23,
                "Name": "HANCOCK"
            },
            {
                "Id": 24,
                "Name": "HARRISON"
            },
            {
                "Id": 25,
                "Name": "HINDS"
            },
            {
                "Id": 26,
                "Name": "HOLMES"
            },
            {
                "Id": 27,
                "Name": "HUMPHREYS"
            },
            {
                "Id": 29,
                "Name": "ITAWAMBA"
            },
            {
                "Id": 30,
                "Name": "JACKSON"
            },
            {
                "Id": 31,
                "Name": "JASPER"
            },
            {
                "Id": 32,
                "Name": "JEFFERSON"
            },
            {
                "Id": 33,
                "Name": "JEFFERSON DAVIS"
            },
            {
                "Id": 34,
                "Name": "JONES"
            },
            {
                "Id": 35,
                "Name": "KEMPER"
            },
            {
                "Id": 36,
                "Name": "LAFAYETTE"
            },
            {
                "Id": 37,
                "Name": "LAMAR"
            },
            {
                "Id": 38,
                "Name": "LAUDERDALE"
            },
            {
                "Id": 39,
                "Name": "LAWRENCE"
            },
            {
                "Id": 40,
                "Name": "LEAKE"
            },
            {
                "Id": 41,
                "Name": "LEE"
            },
            {
                "Id": 42,
                "Name": "LEFLORE"
            },
            {
                "Id": 43,
                "Name": "LINCOLN"
            },
            {
                "Id": 44,
                "Name": "LOWNDES"
            },
            {
                "Id": 45,
                "Name": "MADISON"
            },
            {
                "Id": 46,
                "Name": "MARION"
            },
            {
                "Id": 47,
                "Name": "MARSHALL"
            },
            {
                "Id": 48,
                "Name": "MONROE"
            },
            {
                "Id": 49,
                "Name": "MONTGOMERY"
            },
            {
                "Id": 50,
                "Name": "NESHOBA"
            },
            {
                "Id": 51,
                "Name": "NEWTON"
            },
            {
                "Id": 52,
                "Name": "NOXUBEE"
            },
            {
                "Id": 53,
                "Name": "OKTIBBEHA"
            },
            {
                "Id": 54,
                "Name": "PANOLA"
            },
            {
                "Id": 55,
                "Name": "PEARL RIVER"
            },
            {
                "Id": 56,
                "Name": "PERRY"
            },
            {
                "Id": 57,
                "Name": "PIKE"
            },
            {
                "Id": 58,
                "Name": "PONTOTOC"
            },
            {
                "Id": 59,
                "Name": "PRENTISS"
            },
            {
                "Id": 60,
                "Name": "QUITMAN"
            },
            {
                "Id": 61,
                "Name": "RANKIN"
            },
            {
                "Id": 62,
                "Name": "SCOTT"
            },
            {
                "Id": 63,
                "Name": "SHARKEY"
            },
            {
                "Id": 64,
                "Name": "SIMPSON"
            },
            {
                "Id": 65,
                "Name": "SMITH"
            },
            {
                "Id": 66,
                "Name": "STONE"
            },
            {
                "Id": 67,
                "Name": "SUNFLOWER"
            },
            {
                "Id": 68,
                "Name": "TALLAHATCHIE"
            },
            {
                "Id": 69,
                "Name": "TATE"
            },
            {
                "Id": 70,
                "Name": "TIPPAH"
            },
            {
                "Id": 71,
                "Name": "TISHOMINGO"
            },
            {
                "Id": 72,
                "Name": "TUNICA"
            },
            {
                "Id": 73,
                "Name": "UNION"
            },
            {
                "Id": 74,
                "Name": "WALTHALL"
            },
            {
                "Id": 75,
                "Name": "WARREN"
            },
            {
                "Id": 76,
                "Name": "WASHINGTON"
            },
            {
                "Id": 77,
                "Name": "WAYNE"
            },
            {
                "Id": 78,
                "Name": "WEBSTER"
            },
            {
                "Id": 79,
                "Name": "WILKINSON"
            },
            {
                "Id": 80,
                "Name": "WINSTON"
            },
            {
                "Id": 81,
                "Name": "YALOBUSHA"
            },
            {
                "Id": 82,
                "Name": "YAZOO"
            }
        ];
        $scope.ProviderTypes = [
            {
                "Id": 2,
                "Name": "Slot Contractor"
            },
            {
                "Id": 3,
                "Name": "Group Home"
            },
            {
                "Id": 4,
                "Name": "Center"
            },
            {
                "Id": 5,
                "Name": "Non-Relative In-Home"
            },
            {
                "Id": 6,
                "Name": "Relative In-Home"
            },
            {
                "Id": 7,
                "Name": "Non-Relative Out-of-Home"
            },
            {
                "Id": 8,
                "Name": "Relative Out-of-Home"
            }
        ];
        $scope.Rates = [
            {
                "Id": 0,
                "Name": "Not Rated"
            },
            {
                "Id": 1,
                "Name": "Low"
            },
            {
                "Id": 2,
                "Name": "Average"
            },
            {
                "Id": 3,
                "Name": "Good"
            },
            {
                "Id": 4,
                "Name": "Very Good"
            },
            {
                "Id": 5,
                "Name": "Excellent"
            }
        ];
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
        $scope.filterdProviders = [];
        // init end

        $scope.showProviderDetails = false;

        $scope.showDetails = function (provider) {
            $scope.showProviderDetails = true;
            $scope.provider = provider;
        };

        $scope.clickOk = function (provider) {
            $scope.showProviderDetails = false;
        };
        $scope.search = function () {
            $scope.filterdProviders = [];
            $scope.sortData = { up: true };
            
            googleMapService.getCoordinateByAddress($scope.location.address,function(coordinate) {
                $scope.filterdProviders = providerService.getProvidersByDistince(coordinate.lat, coordinate.lng, $scope.location.distince);

                if ($scope.filterdProviders.length > 0)
                    $(".result-pagination").show();
                $scope.currentPage = 0;
                $scope.listsPerPage = $scope.ItemsPerPageList[0];
                $scope.providersCount = $scope.filterdProviders.length;
                if ($("#selectPerPage option:selected").text()) {
                    $scope.currentPage = 0;
                    $scope.pages = Math.ceil($scope.providersCount / $("#selectPerPage option:selected").text());
                } else
                    $scope.pages = Math.ceil($scope.providersCount / $scope.listsPerPage);
                $scope.pageNum = [];
                $scope.InitPages();
                $scope.setPage = function (num) {
                    if (num == -1) {
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

                $scope.prevPage = function () {
                    if ($scope.currentPage > 0) {
                        $scope.currentPage--;
                    }
                    $scope.InitPages();
                };
                $scope.nextPage = function () {
                    if ($scope.currentPage < $scope.pages - 1) {
                        $scope.currentPage++;
                    }
                    $scope.InitPages();
                };
                $scope.firstPage = function () {
                    $scope.currentPage = 0;
                    $scope.InitPages();
                };

                $scope.lastPage = function () {
                    $scope.currentPage = $scope.pages - 1;
                    $scope.InitPages();
                };
            },function(error) {
                alert(error);
            });
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
            $scope.InitPages();
        };
        $scope.ItemsPerPageList = ['10', '20', '30'];
        $scope.clear = function () {
            $scope.Criteria = {};
        };
        $scope.sort = function () {
            if ($scope.sortData && $scope.sortData.sortField && $scope.filterdProviders) {
                if ($scope.sortData.sortField === "QualityRating") {
                    $scope.filterdProviders = _.orderBy($scope.filterdProviders, [$scope.sortData.sortField], ['asc']);
                } else {
                    $scope.filterdProviders = _.sortBy($scope.filterdProviders, $scope.sortData.sortField);
                }
            }
            if (!$scope.sortData.up) {
                $scope.filterdProviders = _.reverse($scope.filterdProviders);
            }
            $scope.ChangeDisplayNums();
        };
        $scope.up = function () {
            $scope.sortData.up = !$scope.sortData.up;
            $scope.filterdProviders = _.reverse($scope.filterdProviders);
        };
    };

    module.component("aroundProviderSearch", {
        templateUrl: "Areas/around/search/around-provider-search.html",
        controllerAs: "model",
        controller: ["$scope", "$scope", "providerService", "googleMapService", controller]
    });
}())