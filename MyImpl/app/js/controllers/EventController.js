'use strict';

eventsApp.controller('EventController',
['$scope', '$anchorScroll', 'eventDataPromise', '$log', '$routeParams', '$route', EventController]);

  function EventController($scope, $anchorScroll, eventDataPromise, $log, $routeParams, $route) {
    //
    // $scope.myStyle = {color: 'grey'};
    // $scope.myClass = "blue";
    // $scope.myList = ['item1', 'item2', 'item3', 'item4'];

console.log($route); //på detta objekt kan man komma åt alla parameterar inkl queryStrings
    $scope.reload = function(){
      $route.reload();//reload current route/view
    }

    $scope.sortorder = 'name';
    var promise = eventDataPromise.getEvent($routeParams.eventId);

    promise
      .success(function(event){
        $scope.event = event;
      })
      .error(function(data, status, headers, config){
        $log.warn(data, status, headers, config);
      });

      $scope.scrollToSession = function(){
        console.log('in anchorScroll');
          $anchorScroll();
      }


    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }

  }
