eventsApp.factory('CacheFactory', ['$cacheFactory', function($cacheFactory){
  return $cacheFactory('CacheFactory', {capacity: 3});

}]);
