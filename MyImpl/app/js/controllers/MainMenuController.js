eventsApp.controller('MainMenuController',
  ['$scope', '$location',
  function($scope, $location){
    $scope.createEvent = function(){
      //ska fungera för att route till en ny via en funktion
      $location.url('#/newEvent');
      // $scope.$apply();
      // $location.replace();
    }
}]);
