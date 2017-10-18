'use strict';

eventsApp.controller('EditProfileController', ['$scope','GravatarUrlBuilder', EditProfileController]);

function EditProfileController($scope, GravatarUrlBuilder) {
    $scope.user = {};

    $scope.getGravatarUrl = function(email){
      return GravatarUrlBuilder.buildGravatar(email);
    }


}
