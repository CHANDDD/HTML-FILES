var app=angular.module("extraModulesApp",[]);
app.controller("extraModulesCntrl",extraModulesCntrl);
function extraModulesCntrl(){
    this.welcomeMessage="I am not from original module";
}