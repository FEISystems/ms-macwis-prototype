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

        var getProviderTypes = function(){
            return [{
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
            }];
        };

        var getCounties = function(){
            return [{
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
            }]
        };
        var getCities = function(){
            return ["ABBEVILLE", "ABERDEEN", "ACKERMAN", "ALLIGATOR", "AMORY", "ANGUILLA", "ARCOLA", "ARTESIA", "ASHLAND", "BAILEY", "BALDWYN", "BASSFIELD", "BATESVILLE", "BAY SAINT LOUIS", "BAY SPRINGS", "BAY ST LOUIS", "BEAUMONT", "BELMONT", "BELZONI", "BENOIT", "BENTON", "BENTONIA", "BEULAH", "BILOXI", "BLUE MOUNTAIN", "BLUE SPRINGS", "BOGUE CHITTO", "BOLTON", "BOONEVILLE", "BOYLE", "BRANDON", "BROOKHAVEN", "BROOKLYN", "BROOKSVILLE", "BRUCE", "BUCKATUNNA", "BUDE", "BYHALIA", "BYRAM", "CALEDONIA", "CALHOUN CITY", "CAMDEN", "CANTON", "CARRIERE", "CARTHAGE", "CARY", "CEDARBLUFF", "CENTREVILLE", "CHARLESTON", "CHOCTAW", "CLARKSDALE", "CLEVELAND", "CLINTON", "COAHOMA", "COFFEEVILLE", "COILA", "COLDWATER", "COLLINS", "COLLINSVILLE", "COLUMBIA", "COLUMBUS", "COMO", "CONEHATTA", "CORINTH", "CRAWFORD", "CRENSHAW", "CROSBY", "CROWDER", "CRUGER", "CRYSTAL SPGS", "CRYSTAL SPRINGS", "D LO", "DE KALB", "DECATUR", "DERMA", "DIAMONDHEAD", "DIBERVILLE", "DREW", "DUCK HILL", "DUNCAN", "DUNDEE", "DURANT", "ECRU", "EDWARDS", "ELLISVILLE", "ENTERPRISE", "ETHEL", "EUPORA", "FAYETTE", "FITLER", "FLORA", "FLORENCE", "FLOWOOD", "FOREST", "FOXWORTH", "FRIARS POINT", "FULTON", "GAUTIER", "GEORGETOWN", "GLEN ALLAN", "GLENDORA", "GLOSTER", "GOLDEN", "GOODMAN", "GREENVILLE", "GREENWOOD", "GREENWOOD SPRINGS", "GRENADA", "GULFPORT", "GUNNISON", "GUNTOWN", "HAMILTON", "HARRISVILLE", "HATTIESBURG", "HAZLEHURST", "HEIDELBERG", "HERMANVILLE", "HERNANDO", "HICKORY", "HICKORY FLAT", "HOLLANDALE", "HOLLY SPRINGS", "HORN LAKE", "HOULKA", "HOUSTON", "INDIANOLA", "INVERNESS", "ISOLA", "ITTA BENA", "IUKA", "JACKSON", "JAYESS", "JONESTOWN", "KILMICHAEL", "KILN", "KOKOMO", "KOSCIUSKO", "LAKE", "LAKE CORMORANT", "LAMAR", "LAMBERT", "LAUDERDALE", "LAUREL", "LAWRENCE", "LEAKESVILLE", "LELAND", "LENA", "LEXINGTON", "LIBERTY", "LONG BEACH", "LORMAN", "LOUIN", "LOUISE", "LOUISVILLE", "LUCEDALE", "LUDLOW", "LULA", "LUMBERTON", "LYON", "MABEN", "MACON", "MADISON", "MAGEE", "MAGNOLIA", "MANTACHIE", "MARIETTA", "MARION", "MARKS", "MC COOL", "MCCOMB", "MEADVILLE", "MENDENHALL", "MERIDIAN", "METCALFE", "MICHIGAN CITY", "MIZE", "MONTICELLO", "MOOREVILLE", "MOORHEAD", "MORGAN CITY", "MORTON", "MOSELLE", "MOSS POINT", "MOUND BAYOU", "MOUNT OLIVE", "MYRTLE", "NAS MERIDIAN", "NATCHEZ", "NESBIT", "NETTLETON", "NEW ALBANY", "NEW AUGUSTA", "NEWHEBRON", "NEWTON", "NOXAPATER", "OAKLAND", "OCEAN SPRINGS", "OKOLONA", "OLIVE BRANCH", "OSYKA", "OXFORD", "PACHUTA", "PANTHER BURN", "PASCAGOULA", "PASS CHRISTIAN", "PATTISON", "PAULDING", "PEARL", "PELAHATCHIE", "PERKINSTON", "PETAL", "PHEBA", "PHILADELPHIA", "PICAYUNE", "PICKENS", "PINOLA", "PITTSBORO", "PONTOTOC", "POPE", "POPLARVILLE", "PORT GIBSON", "PORTERVILLE", "POTTS CAMP", "PRAIRIE", "PRENTISS", "PRESTON", "PURVIS", "QUITMAN", "RAYMOND", "RENA LARA", "RICHLAND", "RICHTON", "RIDGELAND", "RIENZI", "RIPLEY", "ROBINSONVILLE", "ROLLING FORK", "ROME", "ROSE HILL", "ROSEDALE", "ROXIE", "RULEVILLE", "SALLIS", "SALTILLO", "SARAH", "SARDIS", "SAUCIER", "SCHLATER", "SCOOBA", "SCOTT", "SENATOBIA", "SHANNON", "SHAW", "SHELBY", "SHUBUTA", "SHUQUALAK", "SIDON", "SILVER CITY", "SILVER CREEK", "SLEDGE", "SMITHDALE", "SONTAG", "SOSO", "SOUTHAVEN", "STARKVILLE", "STATE LINE", "STENNIS SPACE CENTER", "STONEWALL", "STOVALL", "SUMMIT", "SUMNER", "SUMRALL", "SUNFLOWER", "TAYLORSVILLE", "TCHULA", "TERRY", "TILLATOBA", "TIPLERSVILLE", "TOOMSUBA", "TUNICA", "TUPELO", "TUTWILER", "TYLERTOWN", "UNION", "UNION CHURCH", "UTICA", "VAIDEN", "VANCLEAVE", "VAUGHAN", "VERONA", "VICKSBURG", "VOSSBURG", "WALLS", "WALNUT", "WALNUT GROVE", "WATER VALLEY", "WAVELAND", "WAYNESBORO", "WEBB", "WEIR", "WESSON", "WEST", "WEST POINT", "WIGGINS", "WINONA", "WINSTONVILLE", "WOODLAND", "WOODVILLE", "YAZOO CITY"];
        };

        var getRates = function(){
            return [
            {
                "Id": 0,
                "Name": "Show All"
            },
            {
                "Id": 1,
                "Name": "1 Stars or greater"
            },
            {
                "Id": 2,
                "Name": "2 Stars or greater"
            },
            {
                "Id": 3,
                "Name": "3 Stars or greater"
            },
            {
                "Id": 4,
                "Name": "4 Stars or greater"
            },
            {
                "Id": 5,
                "Name": "5 Stars"
            }
        ];
        };

        var getGenders = function(){
            return [
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
        }

        var getSortTypes = function(){
            return [
                {
                    "Id": "QualityRating",
                    "Name": "Quality Star Rating"
                },
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
                    "Name": "County"
                }

            ];
        }
        var getDistances = function(){
            return [
                {
                    Id: "5",
                    Name: "5 Miles"
                },
                {
                    Id: "10",
                    Name: "10 Miles"
                },{
                    Id: "25",
                    Name: "25 Miles"
                },{
                    Id: "50",
                    Name: "50 Miles"
                }
            ];
        }

        var titleCaseData = function(data, property)
        {
            var results = [];
            function toTitleCase(str)
            {
                return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            }
        
            $.each(data, function(index, value) {
                if (property)
                {
                    value[property] = toTitleCase(value[property]);
                    results.push(value);
                }
                else
                    results.push(toTitleCase(value));                
            })
            return results;
        }


        return {
            ages: ages,
            getAgeById: getAgeById,
            canTakeBehavioralChildrenes: canTakeBehavioralChildrenes,
            getCanTakeBehavioralChildrenById: getCanTakeBehavioralChildrenById,
            getProviderTypes : getProviderTypes,
            getCounties: getCounties,
            getCities: getCities,
            getRates: getRates,
            getGenders: getGenders,
            getSortTypes: getSortTypes,
            getDistances: getDistances,
            titleCaseData: titleCaseData
        };
    };

    var module = angular.module("macwisWebApp");
    module.factory("dataService", dataService);
}());