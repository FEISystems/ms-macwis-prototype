describe('Component: providerSearch', function () {
    beforeEach(module('macwisWebApp'));

    var $componentController;

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));


    it('if no search creteria then search all', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        $scope.search();
        expect($scope.filteredProviders.length).toBe($scope.AllProviders.length);
    });




    it('search by provider name, should be fuzzy search', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        $scope.Criteria.ProviderName = "a";
        $scope.search();
        var allProviderNameContainsLetterA = true;
        _.each($scope.filteredProviders, function (value) {
            allProviderNameContainsLetterA = allProviderNameContainsLetterA && (value.ProviderName.toLowerCase().indexOf('a') >= 0);
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allProviderNameContainsLetterA).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by provider type', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        var providerTypeValue = 4;
        $scope.Criteria.ProviderType = providerTypeValue;
        $scope.search();
        var allProviderTypeIs4 = true;
        _.each($scope.filteredProviders, function (value) {
            allProviderTypeIs4 = allProviderTypeIs4 && (value.ProviderType == providerTypeValue);
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allProviderTypeIs4).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by city', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        var providerCityValue = "YAZOO CITY";
        $scope.Criteria.City = providerCityValue;
        $scope.search();
        var allProviderCityIsYC = true;
        _.each($scope.filteredProviders, function (value) {
            allProviderCityIsYC = allProviderCityIsYC && (value.PhysicalCity == providerCityValue);
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allProviderCityIsYC).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by county', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        var providerCountyValue = 82;
        $scope.Criteria.County = providerCountyValue;
        $scope.search();
        var allProviderCountyIsYC = true;
        _.each($scope.filteredProviders, function (value) {
            allProviderCountyIsYC = allProviderCountyIsYC && (value.CountyNumber == providerCountyValue);
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allProviderCountyIsYC).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by quality rating', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        var providerQualityRating = 3;
        $scope.Criteria.Rate = providerQualityRating;
        $scope.search();
        var allProviderQualityRatingIs3 = true;
        _.each($scope.filteredProviders, function (value) {
            allProviderQualityRatingIs3 = allProviderQualityRatingIs3 && (value.QualityRating == providerQualityRating);
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allProviderQualityRatingIs3).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by multiple criterias(provider name, provider type, city, county, quality star rating)', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        var providerQualityRating = 3;
        $scope.Criteria.ProviderName = "Abelina";
        $scope.Criteria.ProviderType = 5;
        $scope.Criteria.City = "YAZOO CITY";
        $scope.Criteria.County = 82;
        $scope.Criteria.Rate = 0;
        $scope.search();
        var allFieldsMatched = true;
        _.each($scope.filteredProviders, function (value) {
            allFieldsMatched = allFieldsMatched && (value.ProviderName.toLowerCase().indexOf($scope.Criteria.ProviderName.toLowerCase()) >= 0)
                                                && (value.ProviderType == $scope.Criteria.ProviderType)
                                                && (value.PhysicalCity == $scope.Criteria.City)
                                                && (value.CountyNumber == $scope.Criteria.County)
                                                && (value.QualityRating == $scope.Criteria.Rate);
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allFieldsMatched).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by age', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        var ageRange = 6;
        $scope.Criteria.Age = ageRange;
        $scope.search();
        var allProvidersAgeIn5And9 = true;
        _.each($scope.filteredProviders, function (value) {
            allProvidersAgeIn5And9 = allProvidersAgeIn5And9 && (value.MinAge <= 5 && value.MaxAge >= 9);
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allProvidersAgeIn5And9).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by gender', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        var ageRange = 6;
        $scope.Criteria.Gender = "Boy";
        $scope.search();
        var allProviderIsBoy = true;
        _.each($scope.filteredProviders, function (value) {
            allProviderIsBoy = allProviderIsBoy && (value.Gender == "Boy");
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allProviderIsBoy).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by accepts subsidized child care', function () {
        var $scope = {};
        var component = $componentController('providerSearch', { $scope: $scope });
        $scope.AllProviders = AllProviders();
        var ageRange = 6;
        $scope.Criteria.CanTakeBehavioralChildren = 1;
        $scope.search();
        var allProviderAccepts = true;
        _.each($scope.filteredProviders, function (value) {
            allProviderAccepts = allProviderAccepts && (value.CanTakeChildrenWithBehavioralProblems == true);
        });
        if ($scope.filteredProviders.length > 0) {
            expect(allProviderAccepts).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });
});

function AllProviders() {
    return [
      {
          "Id": 1,
          "ProviderName": "Abelina Martinez",
          "LicenseType": "UNLICENSED",
          "ProviderType": 5,
          "ProviderTypeDescription": "Non-Relative In-Home",
          "ProviderCapacity": 5,
          "PhysicalCity": "YAZOO CITY",
          "PhysicalZipCode": "39194",
          "CountyNumber": 82,
          "CountyName": "YAZOO",
          "PhoneNumber": "205-398-3018",
          "QualityRating": 0,
          "QualityRatingDescription": "Not Rated",
          "MinAge": 7,
          "MaxAge": 7,
          "Gender": "Girl",
          "CanTakeChildrenWithBehavioralProblems": true,
          "Longitude": -90.640331841471721,
          "Latitude": 32.702097831167421
      },
      {
          "Id": 168,
          "ProviderName": "Patricia L Holder",
          "LicenseType": "UNLICENSED",
          "ProviderType": 8,
          "ProviderTypeDescription": "Relative Out-of-Home",
          "ProviderCapacity": 5,
          "PhysicalCity": "YAZOO CITY",
          "PhysicalZipCode": "39194",
          "CountyNumber": 82,
          "CountyName": "YAZOO",
          "PhoneNumber": "662-658-0141",
          "QualityRating": 0,
          "QualityRatingDescription": "Not Rated",
          "MinAge": 4,
          "MaxAge": 9,
          "Gender": "Boy",
          "CanTakeChildrenWithBehavioralProblems": true,
          "Longitude": -90.562220571883046,
          "Latitude": 32.923857458333757
      },
      {
          "Id": 173,
          "ProviderName": "Perla Rosenboom",
          "LicenseType": "UNLICENSED",
          "ProviderType": 7,
          "ProviderTypeDescription": "Non-Relative Out-of-Home",
          "ProviderCapacity": 5,
          "PhysicalCity": "YAZOO CITY",
          "PhysicalZipCode": "39194",
          "CountyNumber": 82,
          "CountyName": "YAZOO",
          "PhoneNumber": "662-704-7084",
          "QualityRating": 0,
          "QualityRatingDescription": "Not Rated",
          "MinAge": 11,
          "MaxAge": 11,
          "Gender": "Both",
          "CanTakeChildrenWithBehavioralProblems": true,
          "Longitude": -90.276894399184613,
          "Latitude": 32.868142375957476
      },
      {
          "Id": 178,
          "ProviderName": "Ramona Esperanza Ortiz",
          "LicenseType": "UNLICENSED",
          "ProviderType": 6,
          "ProviderTypeDescription": "Relative In-Home",
          "ProviderCapacity": 5,
          "PhysicalCity": "YAZOO CITY",
          "PhysicalZipCode": "39194",
          "CountyNumber": 82,
          "CountyName": "YAZOO",
          "PhoneNumber": "662-726-6565",
          "QualityRating": 0,
          "QualityRatingDescription": "Not Rated",
          "MinAge": 7,
          "MaxAge": 9,
          "Gender": "Girl",
          "CanTakeChildrenWithBehavioralProblems": true,
          "Longitude": -90.592949126486161,
          "Latitude": 32.812427293581194
      },
      {
          "Id": 1104,
          "ProviderName": "Bobbye Hill",
          "LicenseType": "LICENSED",
          "ProviderType": 4,
          "ProviderTypeDescription": "Center",
          "ProviderCapacity": 216,
          "PhysicalCity": "MAGEE",
          "PhysicalZipCode": "39111",
          "CountyNumber": 64,
          "CountyName": "SIMPSON",
          "PhoneNumber": "769-572-7126",
          "QualityRating": 0,
          "QualityRatingDescription": "Not Rated",
          "MinAge": 11,
          "MaxAge": 11,
          "Gender": "Girl",
          "CanTakeChildrenWithBehavioralProblems": true,
          "Longitude": -89.728038841343363,
          "Latitude": 32.030667401617627
      },
      {
          "Id": 2615,
          "ProviderName": "A Bright Beginning II",
          "LicenseType": "LICENSED",
          "ProviderType": 4,
          "ProviderTypeDescription": "Center",
          "ProviderCapacity": 76,
          "PhysicalCity": "ABBEVILLE",
          "PhysicalZipCode": "38601",
          "CountyNumber": 36,
          "CountyName": "LAFAYETTE",
          "PhoneNumber": "228-249-6131",
          "QualityRating": 3,
          "QualityRatingDescription": "Good",
          "MinAge": 5,
          "MaxAge": 10,
          "Gender": "Boy",
          "CanTakeChildrenWithBehavioralProblems": true,
          "Longitude": -89.4907531694069,
          "Latitude": 34.5458086616672
      }
    ];
}