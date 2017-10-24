'use strict';

eventsApp.controller('LocaleSampleController',
['$scope', '$locale', function($scope, $locale){
  $scope.myDate = Date.now();
  $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

  throw({message: 'my error thrown'});
}]);
