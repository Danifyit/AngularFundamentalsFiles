'use strict';

eventsApp.controller('FilterSampleController',
['$scope', '$filter', 'durationsFilter', function($scope, $filter, durationsFilter){
  $scope.data = {};

  var durations = $filter('durations'); //alternativ way to get the filter
  console.log({durations});

  $scope.data.durations1 = durationsFilter(1);
  $scope.data.durations2 = durationsFilter(2);
  $scope.data.durations3 = durationsFilter(3);
  $scope.data.durations4 = durationsFilter(4);
}]);
