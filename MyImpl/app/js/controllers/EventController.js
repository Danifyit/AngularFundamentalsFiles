'use strict';

eventsApp.controller('EventController', ['$scope', '$anchorScroll', 'eventData', '$log', EventController]);

  function EventController($scope, $anchorScroll, eventData, $log) {

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
