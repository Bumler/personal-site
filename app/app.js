var mySite = angular.module('mySite', ['ngRoute', 'ui.bootstrap']);

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
		picture: "/assets/projects/hotMeals/hotMeals-ico.png",
		background: "linear-gradient(to bottom right,#c73915,#e7b439)",
		padding: true,
		photos: [
			{
				pic: "/assets/projects/hotMeals/a.png",
				index: 0
			},
						{
				pic: "/assets/projects/hotMeals/b.png",
				index: 1
			},
						{
				pic: "/assets/projects/hotMeals/c.png",
				index: 2
			},
						{
				pic: "/assets/projects/hotMeals/d.png",
				index: 3
			},
						{
				pic: "/assets/projects/hotMeals/e.png",
				index: 4
			},
						{
				pic: "/assets/projects/hotMeals/f.png",
				index: 5
			}
		]
	},
	{
		title: "The Lord Dragons",
		picture: "/assets/projects/tld/tld-ico.jpg"
	},
	{
		title: "The System",
		picture: "/assets/projects/system/system-ico.png"
	},
	{
		title: "Drone Forensics",
		picture: "/assets/projects/drone/drone-ico.png"	
	},
	{
		title: "Carby",
		picture: "/assets/projects/carby/carby-ico.png"	
	},
	{
		title: "V.C. Data Automator",
		picture: "/assets/projects/ventura/ventura-ico.png",
		background: "linear-gradient(to bottom right,#007F00,#004C00)",
		padding: true	
	},
	{
		title: "Toll Booth Simulator",
		picture: "/assets/projects/mcm/mcm-ico.png",
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