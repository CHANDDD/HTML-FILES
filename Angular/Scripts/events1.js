///<reference.path="angular.min.js"/>

var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){
						var players=[
						{
							name:'Ganguly',
							game:'Cricket',
							likes:0,
							dislikes:0							
						},
						{
							name:'Federer',
							game:'Tennis',
							likes:0,
							dislikes:0								
						},
						{
							name:'Gopichand',
							game:'Badmintion',
							likes:0,
							dislikes:0								
						},
						
						];
						$scope.players=players;
						$scope.incrementLikes=function(player){
							player.likes++;
						}
						$scope.incrementDislikes=function(player){
							player.dislikes++;
						}
						
						
					});