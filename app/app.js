var mySite = angular.module('mySite', ['ngRoute']);

mySite.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/main.html'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);