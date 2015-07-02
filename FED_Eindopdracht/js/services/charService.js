angular
.module('myApp.charService',[])
.factory('charService', function() {
	//declare an empty character instance object
    var charInstance = {};

    //function for saving the character to the service
    var setChar = function(char){
    	charInstance = angular.extend(charInstance, char);
    	//charInstance = char;
    }

    //get function which returns the character object
    var getChar = function(){
    	return charInstance 
    }

    //return the public functions
    return { 
    	setChar: function(char){setChar(char)},
    	getChar: function(){return getChar()}
    }
  });