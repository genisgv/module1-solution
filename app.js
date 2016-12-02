(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope){
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.sayMessage = function () {
    if ($scope.totalValue <= 0){
      return "Please enter data first";}
    else if ($scope.totalValue <= 3) {
      return "Enjoy!";}
    else if ($scope.totalValue > 3){
      return "Too much!";}
  };

  $scope.displayNumeric = function () {
    var totalWords = calculateWords($scope.name);
    $scope.totalValue = totalWords;

  };

  function calculateWords(string) {
    if (string.length ==0){
      return 0;}
    else{
      var auxList = string.split(",").length;
      return auxList;}
  }
}

})();
