eventsApp.factory('eventDataPromise', ['$http', '$log', eventDataPromise]);

function eventDataPromise($http, $log){
  return{
    getEvent: function(eventId){
      return $http({method: 'Get', url: 'data/event/' + eventId});
    }
  }
}
