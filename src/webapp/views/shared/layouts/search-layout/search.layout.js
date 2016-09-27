(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    module.component('searchLayout', {
        templateUrl: "views/shared/layouts/search-layout/search.layout.html",
        transclude: {
            "search-panel": 'searchPanel',
            "results-panel": 'resultsPanel'
        }
    })
}())