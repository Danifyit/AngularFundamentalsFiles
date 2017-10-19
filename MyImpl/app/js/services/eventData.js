eventsApp.factory('eventData', ['$http', '$log', eventData]);

function eventData($http, $log){
  return{
    getEvent: function(successcb){
      $http({method: 'Get', url: 'data/event/1'})
        .success(function(data, status, headers, config){
          successcb(data);
        })
        .error(function(data, status, headers, config){
          $log.warn(data, status, headers, config);
        });
    }
  }
}
