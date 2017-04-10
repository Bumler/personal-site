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
	}
	]
}]);