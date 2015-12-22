;(function() {
  'use strict';

  app.controller('main', ['$scope', 'userData', function($scope, userData) {
    userData.success(function(data) {
      $scope.data = data;
    });
  }]);

})();
