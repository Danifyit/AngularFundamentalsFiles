eventsApp.factory('$exceptionHandler', ['', function(exception){
  return console.log("Exception handled: " + exception.message);

}]);
