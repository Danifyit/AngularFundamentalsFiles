'use strict';
//need to add ngCookies as dependecy for the eventsApp module
eventsApp.controller('CookieStoreSampleController',
['$scope', '$cookieStore', function($scope, $cookieStore){
  $scope.event = {id: 1, name: 'My event'}

  $scope.saveEventToCookie = function(event){
    $cookieStore.put('event', event)
  }
  $scope.getEventFromCookie = function(){
    var cookie = $cookieStore.get('event')
    console.log(cookie);
  }
  $scope.removeEventCookie = function(){
    $cookieStore.remove('event')
  }
}]);
