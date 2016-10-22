///<reference.path="angular.min.js"/>

var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){
						var employees=[
						{
							firstname:'Roopchand',
							lastname:'Nelluri',
							gender:'Male',
							dob:'Aug 5 1993'							
						},
						{
							firstname:'Jahnavi',
							lastname:'Nelluri',
							gender:'Female',
							dob:'Jun 21 1988'							
						},
						{
							firstname:'Brahmaiah',
							lastname:'Nelluri',
							gender:'Male',
							dob:'Aug 8 1976'							
						},
						];
						$scope.employees=employees;
						
					});