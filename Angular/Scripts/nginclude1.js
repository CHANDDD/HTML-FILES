///<reference.path="angular.min.js"/>

var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){
						var employees=[
						{name:"Roop",city:"London",salary:65000},
						{name:"Chand",city:"Hyderabad",salary:55000},
						{name:"Jahnavi",city:"Vizag",salary:60000},
						{name:"Sudheer",city:"Vijayawada",salary:62000},
						{name:"Anushka",city:"London",salary:61000},
						{name:"Ganguly",city:"Michigan",salary:55000},
						{name:"RaviTeja",city:"Michigan",salary:58000},
						
						
						];
						$scope.employees=employees;
						$scope.employeeview="employeeList.html";
						
						
						
					});