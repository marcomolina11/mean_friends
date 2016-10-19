app.controller('editController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
  $scope.friends = [];
  $scope.friend = {};
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial - 
    so we didn't set a variable so we could reuse it - 
    we just run the friendsFactory method directly.
  */
   friendsFactory.getFriend($routeParams, function(data){
     $scope.friend = data;
   });
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method 
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see 
    all of the friends when we get back including the updated on??  
    See Index in the previous controller.
  */
    $scope.edit = function(){
      friendsFactory.update($routeParams, $scope.friend);
    }
}]);