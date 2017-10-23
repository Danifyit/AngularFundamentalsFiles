'use strict';

eventsApp.controller('EventController', ['$scope', 'eventData', '$log', EventController]);

  function EventController($scope, eventData, $log) {

    $scope.myStyle = {color: 'grey'};
    $scope.myClass = "blue";
    $scope.myList = ['item1', 'item2', 'item3', 'item4'];



    $scope.sortorder = 'name';
    var promise = eventData.getEvent();

    promise
      .success(function(event){
        $scope.event = event;
      })
      .error(function(data, status, headers, config){
        $log.warn(data, status, headers, config);
      });

    // .success(function(data, status, headers, config){
    //   successcb(data);
    // })
    // .error(function(data, status, headers, config){
    //   $log.warn(data, status, headers, config);
    // })


    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }

  }
