///<reference.path="angular.min.js"/>

var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){
						var employees=[
						{name:"Roop",city:"London",gender:"male",salary:65000},
						{name:"Chand",city:"Hyderabad",gender:"male",salary:55000},
						{name:"Jahnavi",city:"Vizag",gender:"female",salary:60000},
						{name:"Sudheer",city:"Vijayawada",gender:"male",salary:62000},
						{name:"Anushka",city:"London",gender:"female",salary:61000},
						{name:"Ganguly",city:"Michigan",gender:"male",salary:55000},
						{name:"RaviTeja",city:"Michigan",gender:"male",salary:58000},
						
						
						];
						$scope.employees=employees;
						
						
						
					});