(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    module.filter('paging', function () {
        return function (lists, start) {
            return lists.slice(start);
        };
    });
    var controller = function ($scope, $rootScope, providerService, countyCityZipsService) {
        //init start

        var filterButtonClosedText = "filter";
        var filterButtonOpenText = "filter";
        $scope.filterButtonText = filterButtonClosedText;
        $scope.filterPanelOpen = false;

        $scope.toggleFilterPanel = function() {
            var delay = 400,
                easing = "easeOutExpo";
            function openFilterPanel() {
                $("#googleMap").animate({
                    "width" : "40%"
                }, delay, easing, function(){
                    $scope.filterPanelOpen = true;
                });
                $("results-panel").animate({
                    "left" : "40%"
                }, delay, easing);
            };
            function closeFilterPanel() {
                $("#googleMap").animate({
                    "width" : "58%"
                }, delay, easing, function(){
                    $scope.filterPanelOpen = false;
                });
                $("results-panel").animate({
                    "left" : "58%"
                }, delay, easing);
            };

            if ($scope.filterPanelOpen == false) {
                openFilterPanel();
                $scope.filterButtonText = filterButtonOpenText;
                $(".filterCloseIcon").show();
                $(".filterOpenIcon").hide();
            } else if ($scope.filterPanelOpen == true) {
                closeFilterPanel();
                $scope.filterButtonText = filterButtonClosedText;
                $(".filterCloseIcon").hide();
                $(".filterOpenIcon").show();
            }
        };


        $scope.title = "Provider Search";
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

        $scope.CountyCityZips = ["Abbeville","Arkabutla","Ashland","Batesville","Belen","Blue Mountain","Byhalia","Clarksdale","Coahoma","Coldwater","Como","Courtland","Crenshaw","Crowder","Darling","Dumas","Dundee","Etta","Falcon","Falkner","Farrell","Friars Point","Hernando","Hickory Flat","Holly Springs","Horn Lake","Independence","Jonestown","Lake Cormorant","Lamar","Lambert","Lula","Lyon","Marks","Michigan City","Mount Pleasant","Myrtle","Nesbit","New Albany","Olive Branch","Oxford","Pope","Potts Camp","Red Banks","Ripley","Robinsonville","Sarah","Sardis","Senatobia","Sherard","Sledge","Southaven","Taylor","Tiplersville","Tula","Tunica","University","Victoria","Walls","Walnut","Waterford","Greenville","Alligator","Anguilla","Arcola","Avon","Benoit","Beulah","Boyle","Chatham","Cleveland","Doddsville","Drew","Parchman","Dublin","Duncan","Glen Allan","Grace","Gunnison","Hollandale","Holly Ridge","Indianola","Inverness","Isola","Leland","Merigold","Metcalfe","Moorhead","Mound Bayou","Pace","Panther Burn","Rena Lara","Rome","Rosedale","Ruleville","Scott","Shaw","Shelby","Stoneville","Sunflower","Wayside","Winstonville","Winterville","Tupelo","Algoma","Amory","Baldwyn","Becker","Belden","Belmont","Blue Springs","Booneville","Burnsville","Corinth","Dennis","Derma","Ecru","Fulton","Gattman","Glen","Golden","Greenwood Springs","Guntown","Houlka","Houston","Iuka","Mantachie","Marietta","Mooreville","Nettleton","New Site","Okolona","Plantersville","Pontotoc","Randolph","Rienzi","Saltillo","Shannon","Sherman","Smithville","Thaxton","Tishomingo","Toccopola","Trebloc","Tremont","Van Vleet","Vardaman","Verona","Wheeler","Grenada","Banner","Big Creek","Bruce","Calhoun City","Carrollton","Cascilla","Charleston","Coffeeville","Coila","Cruger","Duck Hill","Elliott","Enid","Glendora","Gore Springs","Greenwood","Holcomb","Itta Bena","Mc Carley","Minter City","Money","Morgan City","North Carrollton","Oakland","Paris","Philipp","Pittsboro","Schlater","Scobey","Sidon","Slate Spring","Sumner","Swan Lake","Swiftown","Tie Plant","Tillatoba","Tippo","Tutwiler","Vance","Water Valley","Webb","Winona","Belzoni","Benton","Bentonia","Bolton","Brandon","Braxton","Camden","Canton","Carthage","Cary","Clinton","Conehatta","Crystal Springs","Delta City","D Lo","Durant","Edwards","Ethel","Fayette","Flora","Pocahontas","Florence","Forest","Gallman","Georgetown","Goodman","Harperville","Harriston","Harrisville","Hazlehurst","Hermanville","Hillsboro","Holly Bluff","Kosciusko","Lake","Lena","Lexington","Lorman","Louise","Ludlow","Mc Adams","Mc Cool","Madden","Madison","Magee","Mayersville","Mendenhall","Midnight","Mize","Morton","Mount Olive","Natchez","Newhebron","Pattison","Pelahatchie","Pickens","Piney Woods","Pinola","Port Gibson","Puckett","Pulaski","Raleigh","Raymond","Redwood","Ridgeland","Rolling Fork","Sallis","Sandhill","Satartia","Sharon","Sibley","Silver City","Star","Taylorsville","Tchula","Terry","Thomastown","Tinsley","Tougaloo","Utica","Vaiden","Valley Park","Vaughan","Vicksburg","Walnut Grove","Washington","Wesson","West","Whitfield","Yazoo City","Jackson","Pearl","Richland","Flowood","Byram","Meridian","Bailey","Buckatunna","Chunky","Clara","Collinsville","Daleville","Decatur","De Kalb","Enterprise","Hickory","Lauderdale","Lawrence","Little Rock","Louin","Louisville","Macon","Marion","Newton","Noxapater","Pachuta","Paulding","Philadelphia","Porterville","Preston","Quitman","Rose Hill","Scooba","Sebastopol","Shubuta","Shuqualak","State Line","Stonewall","Toomsuba","Union","Vossburg","Waynesboro","Hattiesburg","Bassfield","Bay Springs","Beaumont","Brooklyn","Carriere","Carson","Collins","Columbia","Eastabuchie","Ellisville","Heidelberg","Laurel","Leakesville","Lucedale","Lumberton","Mc Lain","Mc Neill","Moselle","Moss","Neely","New Augusta","Nicholson","Ovett","Petal","Picayune","Poplarville","Prentiss","Purvis","Richton","Sandersville","Sandy Hook","Seminary","Soso","Stringer","Sumrall","Foxworth","Gulfport","Bay Saint Louis","Stennis Space Center","Diamondhead","Biloxi","Diberville","Escatawpa","Gautier","Hurley","Kiln","Lakeshore","Long Beach","Mc Henry","Moss Point","Ocean Springs","Vancleave","Pascagoula","Pass Christian","Pearlington","Perkinston","Saucier","Waveland","Wiggins","Brookhaven","Bogue Chitto","Bude","Centreville","Chatawa","Crosby","Fernwood","Gloster","Jayess","Kokomo","Liberty","Mc Call Creek","Mccomb","Magnolia","Meadville","Monticello","Oak Vale","Osyka","Roxie","Ruth","Silver Creek","Smithdale","Sontag","Summit","Tylertown","Union Church","Woodville","Columbus","Aberdeen","Ackerman","Artesia","Bellefontaine","Brooksville","Caledonia","Cedarbluff","Crawford","Eupora","French Camp","Hamilton","Kilmichael","Maben","Mantee","Mathiston","Mayhew","Montpelier","Pheba","Prairie","Starkville","Mississippi State","Steens","Stewart","Sturgis","Walthall","Weir","West Point","Woodland","Adams","Alcorn","Amite","Attala","Bolivar","Calhoun","Carroll","Chickasaw","Choctaw","Claiborne","Clarke","Clay","Copiah","Covington","Desoto","Forrest","Franklin","George","Greene","Hancock","Harrison","Hinds","Holmes","Humphreys","Issaquena","Itawamba","Jasper","Jefferson","Jefferson Davis","Jones","Kemper","Lafayette","Leake","Lee","Leflore","Lincoln","Lowndes","Marshall","Monroe","Montgomery","Neshoba","Noxubee","Oktibbeha","Panola","Pearl River","Perry","Pike","Rankin","Sharkey","Simpson","Smith","Stone","Tallahatchie","Tate","Tippah","Warren","Wayne","Webster","Wilkinson","Winston","Yalobusha","Yazoo","38601","38602","38603","38606","38609","38610","38611","38614","38617","38618","38619","38620","38621","38622","38623","38625","38626","38627","38628","38629","38630","38631","38632","38633","38634","38635","38637","38638","38639","38641","38642","38643","38644","38645","38646","38647","38649","38650","38651","38652","38654","38655","38658","38659","38661","38663","38664","38665","38666","38668","38669","38670","38671","38672","38673","38674","38675","38676","38677","38679","38680","38683","38685","38686","38701","38702","38703","38704","38720","38721","38722","38723","38725","38726","38730","38731","38732","38733","38736","38737","38738","38739","38740","38744","38745","38746","38748","38749","38751","38753","38754","38756","38759","38760","38761","38762","38764","38765","38767","38768","38769","38771","38772","38773","38774","38776","38778","38780","38781","38782","38801","38802","38803","38804","38820","38821","38824","38825","38826","38827","38828","38829","38833","38834","38835","38838","38839","38841","38843","38844","38846","38847","38848","38849","38850","38851","38852","38855","38856","38857","38858","38859","38860","38862","38863","38864","38865","38866","38868","38869","38870","38871","38873","38874","38875","38876","38877","38878","38879","38880","38901","38902","38913","38914","38915","38916","38917","38920","38921","38922","38923","38924","38925","38926","38927","38928","38929","38930","38935","38940","38941","38943","38944","38945","38946","38947","38948","38949","38950","38951","38952","38953","38954","38955","38957","38958","38959","38960","38961","38962","38963","38964","38965","38966","38967","39038","39039","39040","39041","39042","39043","39044","39045","39046","39047","39051","39054","39056","39057","39058","39059","39060","39061","39062","39063","39066","39067","39069","39071","39072","39073","39074","39077","39078","39079","39080","39081","39082","39083","39086","39087","39088","39090","39092","39094","39095","39096","39097","39098","39107","39108","39109","39110","39111","39113","39114","39115","39116","39117","39119","39120","39121","39122","39130","39140","39144","39145","39146","39148","39149","39150","39151","39152","39153","39154","39156","39157","39158","39159","39160","39161","39162","39163","39165","39166","39167","39168","39169","39170","39171","39173","39174","39175","39176","39177","39179","39180","39181","39182","39183","39189","39190","39191","39192","39193","39194","39201","39202","39203","39204","39205","39206","39207","39208","39209","39210","39211","39212","39213","39215","39216","39217","39218","39225","39232","39235","39236","39250","39269","39271","39272","39282","39283","39284","39286","39288","39289","39296","39298","39301","39302","39303","39304","39305","39307","39309","39320","39322","39323","39324","39325","39326","39327","39328","39330","39332","39335","39336","39337","39338","39339","39341","39342","39345","39346","39347","39348","39350","39352","39354","39355","39356","39358","39359","39360","39361","39362","39363","39364","39365","39366","39367","39401","39402","39403","39404","39406","39407","39421","39422","39423","39425","39426","39427","39428","39429","39436","39437","39439","39440","39441","39442","39443","39451","39452","39455","39456","39457","39459","39460","39461","39462","39463","39464","39465","39466","39470","39474","39475","39476","39477","39478","39479","39480","39481","39482","39483","39501","39502","39503","39505","39506","39507","39520","39521","39522","39525","39529","39530","39531","39532","39533","39534","39535","39540","39552","39553","39555","39556","39558","39560","39561","39562","39563","39564","39565","39566","39567","39568","39569","39571","39572","39573","39574","39576","39577","39581","39595","39601","39602","39603","39629","39630","39631","39632","39633","39635","39638","39641","39643","39645","39647","39648","39649","39652","39653","39654","39656","39657","39661","39662","39663","39664","39665","39666","39667","39668","39669","39701","39702","39703","39704","39705","39710","39730","39735","39736","39737","39739","39740","39741","39743","39744","39745","39746","39747","39750","39751","39752","39753","39754","39755","39756","39759","39760","39762","39766","39767","39769","39771","39772","39773","39776"];
        
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
            if (!$scope.Criteria || $scope.Criteria.ProviderName ||
                $scope.Criteria.ProviderType || $scope.Criteria.City || $scope.Criteria.County || ($scope.Criteria.Rate || $scope.Criteria.Rate === 0)) {
                angular.forEach($scope.AllProviders, function (provider) {
                    if ((!$scope.Criteria.ProviderName || ($scope.Criteria.ProviderName && $scope.Criteria.ProviderName === provider.ProviderName)) &&
                    (!$scope.Criteria.ProviderType || ($scope.Criteria.ProviderType && $scope.Criteria.ProviderType === provider.ProviderType)) &&
                    (!$scope.Criteria.City || ($scope.Criteria.City && $scope.Criteria.City === provider.PhysicalCity)) &&
                    (!$scope.Criteria.County || ($scope.Criteria.County && $scope.Criteria.County === provider.CountyNumber)) &&
                    ($scope.Criteria.Rate === undefined || $scope.Criteria.Rate === provider.QualityRating)) {
                        $scope.filterdProviders.push(provider);
                    }
                });

                $("#white-bg").fadeOut( 500, function() {
                });

                // $("#white-bg").animate({
                //     "background-color" : "transparent"
                // }, 500, "linear", function(){
                //     $("#white-bg").hide()
                // });


                $("[ng-transclude=search-panel]").animate({
                        "top" : "0px",
                        "padding-top" : "0px",
                        "padding-bottom" : "0px"
                    }, 1000, "easeOutExpo", function(){
                });

            } else {
                $scope.filterdProviders = $scope.AllProviders;

                $("#white-bg").fadeOut( 500, function() {
                });


                $("[ng-transclude=search-panel]").animate({
                    "top" : "0px",
                    "padding-top" : "0px",
                    "padding-bottom" : "0px"
                }, 1000, "easeOutExpo", function(){
                });
            };

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
        
        
        this.$onInit = function() {
            setTimeout(function() {
                 $("#CountyCityZips").combobox();
                 $("#CountyCityZipsundefined").attr("placeholder", "County, City or Zip");
            },100);
        }
    };

    module.component("providerSearch", {
        templateUrl: "Areas/providers/search/provider-search.html",
        controllerAs: "model",
        controller: ["$scope", "$scope", "providerService", "countyCityZipsService", controller]
    });
}())