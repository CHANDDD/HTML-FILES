///<reference.path="angular.min.js"/>

var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){
						var employees=[
						{name:"Roop",dateofbirth:new Date("August05,1993"),gender:"male",salary:65000},
						{name:"Chand",dateofbirth:new Date("August06,1993"),gender:"male",salary:55000},
						{name:"Jahnavi",dateofbirth:new Date("August12,1992"),gender:"female",salary:60000},
						{name:"Sudheer",dateofbirth:new Date("August25,1991"),gender:"male",salary:62000},
						{name:"Anushka",dateofbirth:new Date("August26,1989"),gender:"female",salary:61000},
						{name:"Ganguly",dateofbirth:new Date("August05,1988"),gender:"male",salary:55000},
						{name:"RaviTeja",dateofbirth:new Date("August05,1989"),gender:"male",salary:58000},
						
						
						];
						$scope.employees=employees;
						$scope.rowlimit=3;
						
						
					});