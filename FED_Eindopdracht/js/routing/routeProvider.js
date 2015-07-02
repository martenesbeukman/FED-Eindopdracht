angular.module('myApp').
config(['$routeProvider', function($routeProvider) {

	//character creation view	
  $routeProvider
   .when('/', {
    controller: 'charController',
    templateUrl: 'js/views/charSelection.html'
  })
   //Mainscreen/menu view
  .when('/play', {
    controller: '',
    templateUrl: 'js/views/mainScreen.html'
  })
//battle view
 .when('/battle/:type', {
controller: 'enemyController',
templateUrl: 'js/views/battle.html'
 })
//inventory view
  .when('/inventory', {
controller: 'charController',
templateUrl: 'js/views/inventory.html'
 })
//unknown link? redirect to character creation
 .otherwise({redirectTo: '/'});
}]);