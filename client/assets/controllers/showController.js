app.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams){
	$scope.friend = {};
	friendsFactory.getFriend($routeParams, function(data){
			$scope.friend = data;
	})

}])