app.controller('enemyController',['$scope', '$sce','$routeParams','$http', 'charService',
function($scope, $sce, $routeParams, $http, charService) {

 $scope.character = charService.getChar();
console.log($scope.character);
console.log($routeParams);

$scope.actions = [];
$scope.winner = "";

var enemies = {content : null};

$http.get('js/enemies.json').success(function(response) {
        enemies = response;
        var enemy = enemies[$routeParams.type];


  $scope.enemy = {
    name: $routeParams.type,
    damage: enemy.damage,
    health: enemy.health
  };

 $scope.renderEnemy = function()
{
    return $sce.trustAsHtml(
    	'<li>Type: '+$scope.enemy.name+'</li>'+
		'<li>Damage: '+$scope.enemy.damage+'</li>'+
		'<li>Health :'+$scope.enemy.health+'</li>'
    	);
};
});

//Load the weaponsets from local json file
$http.get('js/sets.json').success(function(response) {
        sets = response;

        //bind the chosen weaponset to the character
        $scope.character.damage = sets[$scope.character.set].damage;
        $scope.character.health = sets[$scope.character.set].health;


//display the hero stats by dynamically injecting html
 $scope.renderHero = function()
{
    return $sce.trustAsHtml(
    	'<li>Name: '+$scope.character.name+'</li>'+
		'<li>Role: '+$scope.character.role+'</li>'+
		'<li>Damage: '+$scope.character.damage+'</li>'+
		'<li>Health: '+$scope.character.health+'</li>'
    	);
};
});


//display the fight by injecting html
$scope.renderFight = function()
{

	//loop until break
	while(true){

		//get a random number to emulate a game engine
		var rand = Math.random(); 

		//if rand> 0.5 the hero attack the enemy. else the enemy attacks the hero
		if(rand >= 0.5){
			$scope.enemy.health -= $scope.character.damage;
			$scope.actions.push(new Action($scope.character, $scope.enemy));
		}else{
			$scope.character.health -= $scope.enemy.damage;
			$scope.actions.push(new Action($scope.enemy, $scope.character));
		}


		//check if the hero or the enemy are dead. if so declare a winner and break
		if($scope.enemy.health < 0){
			$scope.winner = $scope.character.name;
			break;
		}
		else if($scope.character.health < 0)			
		{
			$scope.winner = $scope.enemy.name;
			break;
		}	
	}
	//add the final result to the html using jquery
	$('#result').append("<p>The winner is: "+$scope.winner+"</p>");
	$('#result').append("<a href='index.html'>play again? </a>");
}


}]);

//function to map the source and the target of an action to the controller
function Action(source, target){
	this.source = source;
	this.target = target;
}

//custom directive used to loop a template multiple times, and injecting html accordingly
angular.module('myApp').directive('currentFight', function(){
    return {
        restrict: 'A',
        template: '<p>{{action.source.name}} attacks {{action.target.name}} It deals {{action.source.damage}} damage </p>',
        replace: true,
        transclude: false,
        scope: {
            action: '=currentFight'
        }
    };
});
