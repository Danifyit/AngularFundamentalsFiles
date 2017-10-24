eventsApp.controller('EventListController', ['$scope', 'eventData',
function($scope ,eventData){
  $scope.events = eventData.getAllEvents();
}])
