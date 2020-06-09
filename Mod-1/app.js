(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function  LunchCheckController($scope){
  $scope.lunchMenu = "";
  $scope.foodCheck =0;
  } 
});


})();
