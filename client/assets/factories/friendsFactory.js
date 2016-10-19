app.factory('friendsFactory', ['$http', function($http){
	//constructor for our factory
	var friends = [
		{
			first_name: 'Kiri',
			last_name: 'Chapman',
			hometown: 'Michigan',
			birthday: "1990"
		},
		{
			first_name: 'Veronica',
			last_name: 'Nalo',
			hometown: 'Orlando',
			birthday: "1990"
		},
		{
			first_name: 'Dey',
			last_name: 'Lopez',
			hometown: 'Miami',
			birthday: "1980"
		},
	];
	var friend = {};
	function FriendsFactory(){
		var _this = this;

		this.create = function(newFriend){
		// this.create = function(newFriend, callback){
			// $http.post('/friends', newFriend).then(function(returned_data){
			// 	console.log(returned_data.data);
			// 	if (typeof(callback) == 'function'){
			// 		callback(returned_data.data);
			// 	}
			// });
			friends.push(newFriend);
		};

		this.update = function($routeParams, friend){
			console.log($routeParams.id)
			console.log(friend);
			friends[$routeParams.id] = friend;
		}
		// this.update = function(editedFriend, id, callback){
		// 	$http.patch('/friends/${ id }/edit', editedFriend).then(function(returned_data){
		// 		console.log(returned_data.data);
		// 		if (typeof(callback) == 'function'){
		// 			callback(returned_data.data);
		// 		}
		// 	});
		// };

		this.index = function(callback){
			$http.get('/friends').then(function(returned_data){
				console.log(returned_data.data);
				friends = returned_data.data;
				callback(friends);
			});
		};
		this.delete = function($index){
        	friends.splice($index, 1);
    	};
    	this.show = function($index){
        	friend = friends[$index];
    	};
    	// Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    	this.getFriends = function(callback){
      		callback(friends);
    	};
    	this.getFriend = function($routeParams, callback){
    		friend = friends[$routeParams.id];
        	callback(friend);
    	};
  	}
  	console.log(new FriendsFactory());
  	return new FriendsFactory();
}]);