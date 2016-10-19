app.controller('mainController', ['$scope', 'friendsFactory', function($scope, friendsFactory){
	$scope.friends = [];
	friendsFactory.getFriends(function(data){
		console.log(data);
		$scope.friends = data;
	})
	$scope.delete = function($index){
		friendsFactory.delete($index);
	}
}])