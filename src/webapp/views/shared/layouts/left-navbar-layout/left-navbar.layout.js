(function () {
  "use strict";
  var module = angular.module("macwisWebApp");

  module.component('leftNavbarLayout', {
      templateUrl: "views/shared/layouts/left-navbar-layout/left-navbar.layout.html",
      transclude: {
        "aside-panel": 'asidePanel',
        "body-panel": 'bodyPanel'
      }
  })
}())