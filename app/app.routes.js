app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'main',
      templateUrl: 'app/components/home/view.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
