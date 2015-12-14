app.directive('social', function() {
	return {
  	restict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'app/shared/social/view.html'
  };
});
