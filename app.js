(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope){
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalWords = calculateWords($scope.name);
    $scope.totalValue = totalWords;
    console.log("BUUUUU"+ $scope.totalValue);
  };

  function calculateWords(string) {
    var auxList = string.split(",").length;
    return auxList;
  };

  $scope.sayMessage = function () {
    console.log($scope.totalValue);
    if($scope.totalValue <= 3){
      return "Enjoy your meal";}
    else {
      return "Too much !!!";}
  };

}

})();
