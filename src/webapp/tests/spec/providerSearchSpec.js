describe('Component: providerSearch', function () {
    beforeEach(module('macwisWebApp'));
    var $scope = null;
    var controller = null;
    beforeEach(inject(function (_$componentController_, $rootScope) {
        $scope = $rootScope.$new();
        controller = _$componentController_('providerSearch', {
            $scope: $scope
        });
    }));

    it('if no search creteria then search all', function () {
        $scope.model.AllProviders = AllProviders();
        $scope.model.search();
        expect($scope.model.filteredProviders.length).toBe($scope.model.AllProviders.length);
    });

    it('search by provider name, should be fuzzy search', function () {
        $scope.model.AllProviders = AllProviders();
        $scope.model.Criteria.ProviderName = "a";
        $scope.model.search();
        var allProviderNameContainsLetterA = true;
        _.each($scope.model.filteredProviders, function (value) {
            allProviderNameContainsLetterA = allProviderNameContainsLetterA && (value.ProviderName.toLowerCase().indexOf('a') >= 0);
        });
        if ($scope.model.filteredProviders.length > 0) {
            expect(allProviderNameContainsLetterA).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by provider type', function () {
        $scope.model.AllProviders = AllProviders();
        var providerTypeValue = 4;
        $scope.model.Criteria.ProviderType = providerTypeValue;
        $scope.model.search();
        var allProviderTypeIs4 = true;
        _.each($scope.model.filteredProviders, function (value) {
            allProviderTypeIs4 = allProviderTypeIs4 && (value.ProviderType == providerTypeValue);
        });
        if ($scope.model.filteredProviders.length > 0) {
            expect(allProviderTypeIs4).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by city', function () {
        $scope.model.AllProviders = AllProviders();
        var providerCityValue = "YAZOO CITY";
        $scope.model.Criteria.City = providerCityValue;
        $scope.model.search();
        var allProviderCityIsYC = true;
        _.each($scope.model.filteredProviders, function (value) {
            allProviderCityIsYC = allProviderCityIsYC && (value.PhysicalCity == providerCityValue);
        });
        if ($scope.model.filteredProviders.length > 0) {
            expect(allProviderCityIsYC).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by county', function () {
        $scope.model.AllProviders = AllProviders();
        var providerCountyValue = 82;
        $scope.model.Criteria.County = providerCountyValue;
        $scope.model.search();
        var allProviderCountyIsYC = true;
        _.each($scope.filteredProviders, function (value) {
            allProviderCountyIsYC = allProviderCountyIsYC && (value.CountyNumber == providerCountyValue);
        });
        if ($scope.model.filteredProviders.length > 0) {
            expect(allProviderCountyIsYC).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by quality rating', function () {
        $scope.model.AllProviders = AllProviders();
        var providerQualityRating = 3;
        $scope.model.Criteria.Rate = providerQualityRating;
        $scope.model.search();
        var allProviderQualityRatingIs3 = true;
        _.each($scope.model.filteredProviders, function (value) {
            allProviderQualityRatingIs3 = allProviderQualityRatingIs3 && (value.QualityRating == providerQualityRating);
        });
        if ($scope.model.filteredProviders.length > 0) {
            expect(allProviderQualityRatingIs3).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by multiple criterias(provider name, provider type, city, county, quality star rating)', function () {
        $scope.model.AllProviders = AllProviders();
        var providerQualityRating = 3;
        $scope.model.Criteria.ProviderName = "Abelina";
        $scope.model.Criteria.ProviderType = 5;
        $scope.model.Criteria.City = "YAZOO CITY";
        $scope.model.Criteria.County = 82;
        $scope.model.Criteria.Rate = 0;
        $scope.model.search();
        var allFieldsMatched = true;
        _.each($scope.model.filteredProviders, function (value) {
            allFieldsMatched = allFieldsMatched && (value.ProviderName.toLowerCase().indexOf($scope.model.Criteria.ProviderName.toLowerCase()) >= 0)
                                                && (value.ProviderType == $scope.model.Criteria.ProviderType)
                                                && (value.PhysicalCity == $scope.model.Criteria.City)
                                                && (value.CountyNumber == $scope.model.Criteria.County)
                                                && (value.QualityRating == $scope.model.Criteria.Rate);
        });
        if ($scope.model.filteredProviders.length > 0) {
            expect(allFieldsMatched).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by age', function () {
        $scope.model.AllProviders = AllProviders();
        var ageRange = 6;
        $scope.model.Criteria.Age = ageRange;
        $scope.model.search();
        var allProvidersAgeIn5And9 = true;
        _.each($scope.model.filteredProviders, function (value) {
            allProvidersAgeIn5And9 = allProvidersAgeIn5And9 && (value.MinAge <= 5 && value.MaxAge >= 9);
        });
        if ($scope.model.filteredProviders.length > 0) {
            expect(allProvidersAgeIn5And9).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by gender', function () {
        $scope.model.AllProviders = AllProviders();
        var ageRange = 6;
        $scope.model.Criteria.Gender = "Boy";
        $scope.model.search();
        var allProviderIsBoy = true;
        _.each($scope.model.filteredProviders, function (value) {
            allProviderIsBoy = allProviderIsBoy && (value.Gender == "Boy");
        });
        if ($scope.model.filteredProviders.length > 0) {
            expect(allProviderIsBoy).toBe(true);
        }
        else {
            fail("result is empty, failed.");
        }
    });

    it('search by accepts subsidized child care', function () {
        $scope.model.AllProviders = AllProviders();
        $scope.model.Criteria.CanTakeBehavioralChildren = 1;
        $scope.model.search();
        var allProviderAccepts = true;
        _.each($scope.model.filteredProviders, function (value) {
            allProviderAccepts = allProviderAccepts && (value.CanTakeChildrenWithBehavioralProblems == "Yes");
        });
        if ($scope.model.filteredProviders.length > 0) {
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
          "CanTakeChildrenWithBehavioralProblems": "No",
          "Longitude": -90.640331841471721,
          "Latitude": 32.702097831167421,
          "HoursofOperation": "9 AM - 4 AM",
          "DaysofOperation": "M W TH F",
          "CanTakeChildrenWithMedicalProblems": "No",
          "USDAFoodPrograms": "Yes"
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
          "CanTakeChildrenWithBehavioralProblems": "Yes",
          "Longitude": -90.562220571883046,
          "Latitude": 32.923857458333757,
          "HoursofOperation": "9 AM - 10 AM",
          "DaysofOperation": "T W F",
          "CanTakeChildrenWithMedicalProblems": "No",
          "USDAFoodPrograms": "No"
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
          "CanTakeChildrenWithBehavioralProblems": "Yes",
          "Longitude": -90.276894399184613,
          "Latitude": 32.868142375957476,
          "HoursofOperation": "11 AM - 6 AM",
          "DaysofOperation": "T W",
          "CanTakeChildrenWithMedicalProblems": "No",
          "USDAFoodPrograms": "No"
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
          "CanTakeChildrenWithBehavioralProblems": "Yes",
          "Longitude": -90.592949126486161,
          "Latitude": 32.812427293581194,
          "HoursofOperation": "3 PM - 5 PM",
          "DaysofOperation": "M T W TH",
          "CanTakeChildrenWithMedicalProblems": "No",
          "USDAFoodPrograms": "No"
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
          "CanTakeChildrenWithBehavioralProblems": "Yes",
          "Longitude": -89.728038841343363,
          "Latitude": 32.030667401617627,
          "HoursofOperation": "9 AM - 4 PM",
          "DaysofOperation": "T TH F",
          "CanTakeChildrenWithMedicalProblems": "Yes",
          "USDAFoodPrograms": "No"
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
          "CanTakeChildrenWithBehavioralProblems": "Yes",
          "Longitude": -89.4907531694069,
          "Latitude": 34.5458086616672,
          "HoursofOperation": "10 AM - 5 PM",
          "DaysofOperation": "M T TH",
          "CanTakeChildrenWithMedicalProblems": "Yes",
          "USDAFoodPrograms": "Yes"
      }
    ];
}