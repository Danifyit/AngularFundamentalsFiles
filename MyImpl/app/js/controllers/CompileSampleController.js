'use strict';

eventsApp.controller('CompileSampleController',
['$scope' ,'$compile', function($scope, $compile){

  $scope.appendDivToElement = function(markup){
    console.log($compile(markup)($scope));
    return $compile(markup)($scope).appendTo(angular.element('#append-here'));
  }

}]);
