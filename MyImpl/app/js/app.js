'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute', 'ngResource'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/events',
    {
      templateUrl: 'templates/EventList.html',
      controller: 'EventListController'
    })
    .when('/newEvent',
      {
        templateUrl: 'templates/newEvent.html',
        controller: 'EditEventController'
      })
      .when('/eventList',
      {
        templateUrl: 'templates/EventList.html',
        controller: 'EventListController'
      })
      .when('/event/:eventId',
      {
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController'
      })
      .otherwise({redirectTo: '/events'});
      $locationProvider.html5Mode(true);
  });
