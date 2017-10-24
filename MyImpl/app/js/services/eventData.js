eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id',
      {id:'@id'},
      {"getAll": {
        method: "GET",
        isArray: true,
        params: {something: "foo"}}});

    return {
        getEvent: function() {
            return resource.get({id:1});
        },
        save: function(event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function() {
            return resource.query();
        }
    };
});

// eventsApp.factory('eventData', ['$http', '$log', eventData]);
//
// function eventData($http, $log){
//   return{
//     getEvent: function(){
//       return $http({method: 'Get', url: 'data/event'});
//     }
//   }
// }
