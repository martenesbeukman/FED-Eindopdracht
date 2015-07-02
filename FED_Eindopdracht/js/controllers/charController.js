app.controller('charController',['$scope','$rootScope','charService',
    function($scope,$rootScope, charService) {

    //retrieve the character from the service
   $scope.character = charService.getChar();

   //declare a default itemset
   $scope.character.set = 'balanced'; 	

   //a setChar function to save the character to the character service
  var setChar = function(){
  	console.log("change");
  charService.setChar($scope.character);
}

	//if the view is destroyed -> save the character
  $scope.$on("$destroy", function(){
  		console.log($scope.character);
        setChar();
    });

}]);
