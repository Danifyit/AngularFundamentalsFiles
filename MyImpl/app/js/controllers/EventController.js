'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData) {

    $scope.myStyle = {color: 'grey'};
    $scope.myClass = "blue";
    $scope.myList = ['item1', 'item2', 'item3', 'item4'];



    $scope.sortorder = 'name';
    $scope.event = eventData.event;

    

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }

  });
