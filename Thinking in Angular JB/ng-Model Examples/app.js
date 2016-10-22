var app=angular.module("ngModelExample",[]);
app.controller("ExampleCntrl",exampleCntrl);
function exampleCntrl($scope){
    $scope.confirmChange=function(){
        console.log("Confirmation changed");

    }
}