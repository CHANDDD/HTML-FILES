///<reference.path="angular.min.js"/>

var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){
						var employee={
							firstname:'Roopchand',
							lastname:'Nelluri',
							gender:'Male',
							dob:'Aug 5 1993',
							image:'C:\HTML FILES\images\img.jpg'
						};
						$scope.employee=employee;
						
					});