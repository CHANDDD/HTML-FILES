var myModule=angular.module("clockApp",[]);
myModule.controller("clockCntrl",clock);
function clock($scope){
    var date=new Date();
    $scope.timeString=date.toTimeString();

}
