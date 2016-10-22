///<reference.path="angular.min.js"/>

var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){
						var employees=[
						{name:"Roop",city:"London",gender:1,salary:65000},
						{name:"Chand",city:"Hyderabad",gender:1,salary:55000},
						{name:"Jahnavi",city:"Vizag",gender:2,salary:60000},
						{name:"Sudheer",city:"Vijayawada",gender:1,salary:62000},
						{name:"Anushka",city:"London",gender:2,salary:61000},
						{name:"Ganguly",city:"Michigan",gender:3,salary:55000},
						{name:"RaviTeja",city:"Michigan",gender:3,salary:58000},
						
						
						];
						$scope.employees=employees;
						
						
						
					});