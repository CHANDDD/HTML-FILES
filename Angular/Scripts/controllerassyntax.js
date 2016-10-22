var app=angular.module("Demo",[])
				.controller("countryController",function(){
					this.name="India";
				})
				.controller("stateController",function(){
					this.name="AndhraPradesh";
					
				})
				.controller("cityController",function(){
					this.name="Vijayawada";
					
				});