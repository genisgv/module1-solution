(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope){
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.sayMessage = function () {
    if ($scope.totalValue == 0){
      return " ";}
    else if ($scope.totalValue != 0 && $scope.totalValue <= 3) {
      return "Enjoy your meal";}
    else if ($scope.totalValue > 3){
      return "Too much !!!";}
  };

  $scope.displayNumeric = function () {
    var totalWords = calculateWords($scope.name);
    $scope.totalValue = totalWords;

  };

  function calculateWords(string) {
    var auxList = string.split(",").length;
    return auxList;
  }
}

})();
