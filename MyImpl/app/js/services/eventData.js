eventsApp.factory('eventData', ['$http', '$log', eventData]);

function eventData($http, $log){
  return{
    getEvent: function(){
      return $http({method: 'Get', url: 'data/event/1'});
    }
  }
}
