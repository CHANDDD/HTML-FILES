///<reference.path="angular.min.js"/>
var app=angular.module("myModule",["ngRoute"])
			   .config(function($routeProvider){
				   $routeProvider	
								.when("/home",{
									templateUrl:"Templates/home.html",
									controller:"homeController"
								})
								.when("/courses",{
									templateUrl:"Templates/courses.html",
									controller:"coursesController"
								})
								.when("/students",{
									templateUrl:"Templates/students.html",
									controller:"studentsController"
								})
								.otherwise({
									redirectTo:"/home"
								})
								
			   })
			   .controller("homeController",function($scope){
				   $scope.message="Home Page";
				   
			   })
			   .controller("coursesConroller",function($scope){
				   $scope.courses=["java","SQL",".NET"];
			   })
			   .controller("studentsController",function($scope){
				   $scope.students=["Roopchand","Sridevi","jahnavi","Prasanna"];
				})