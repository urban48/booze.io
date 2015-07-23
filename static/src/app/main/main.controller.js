(function() {
  'use strict';

  angular
    .module('boozio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $timeout) {
    $scope.cocktails = [
      {
        name: "Vodka Martini",
        code: 1,
        image: "APP-02.png"
      },
      {
        name: "Vodka Lemon Syrup",
        code: 2,
        image: "APP-03.png"
      },
      {
        name: "Martini Lemon Syrup",
        code: 3,
        image: "APP-04.png"
      },
      {
        name: "Vodka Syrup",
        code: 4,
        image: "APP-05.png"
      }
    ];

    $scope.pour = function(cocktail) {
      cocktail.isActive = true;
      $timeout(function() {
        cocktail.isActive = false;
      }, 1000);
    };

    $scope.lucky = function() {
      $scope.luckyActive = true;
      $timeout(function() {
        $scope.luckyActive = false;
      }, 1000);
    };
  }
})();
