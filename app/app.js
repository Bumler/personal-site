var mySite = angular.module('mySite', ['ngRoute']);

mySite.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/main.html',
		controller: 'mainController'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);

mySite.controller('mainController', ['$scope', function($scope){
	$scope.projects = [
	{
		title: "HotMeals.com",
		picture: "/assets/hotMeals-ico.png",
		background: "linear-gradient(to bottom right,#c73915,#e7b439)",
		padding: true
	},
	{
		title: "TheLordDragons.com",
		picture: "/assets/tld-ico.jpg"
	},
	{
		title: "The System",
		picture: "/assets/system-ico.png"
	},
	{
		title: "Drone Forensics",
		picture: "/assets/drone-ico.png"	
	},
	{
		title: "Carby",
		picture: "/assets/carby-ico.png"	
	},
	{
		title: "V.C. Data Automator",
		picture: "/assets/badge-ico.png",
		background: "linear-gradient(to bottom right,#007F00,#004C00)",
		padding: true	
	},
	{
		title: "Toll Booth Simulator",
		picture: "/assets/mcm-ico.png",
		background: "linear-gradient(to bottom right,#BFBFBF,#ABABAB)",
		padding: true
	}
	]
}]);