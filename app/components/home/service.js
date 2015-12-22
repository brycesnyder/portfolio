;(function() {
  'use strict';

  app.factory('userData', ['$http', function($http) {
    return $http.get('app/data.json')
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    });
  }]);

})();
