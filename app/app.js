var mySite = angular.module('mySite', ['ngRoute']);

mySite.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/main.html',
		controller: 'mainController'
	})
	.when('/project',{
		templateUrl: 'views/project.html',
		controller: 'projectController'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);

mySite.service('currentProjectService', function(){
	var currentProject;
	this.setCurrentProject = function(project){
		currentProject = project;
	};
	this.getCurrentProject = function(){
		return currentProject;
	}
});

mySite.controller('mainController', function($scope, $anchorScroll, $location, currentProjectService){
	$scope.projects = [
	{
		title: "Hot Meals",
		picture: "/assets/hotMeals-ico.png",
		background: "linear-gradient(to bottom right,#c73915,#e7b439)",
		padding: true
	},
	{
		title: "The Lord Dragons",
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
	];

	$scope.goToProject = function(project) {
		currentProjectService.setCurrentProject(project);
		$location.path('/project');
	}

	$scope.scrollTo = function (scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll();
	};
});

mySite.controller('projectController', function($scope, currentProjectService){
  $scope.currentProject = currentProjectService.getCurrentProject();
});