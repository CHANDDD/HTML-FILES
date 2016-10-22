var app=angular.module("modulesApp",["extraModulesApp","ngTagsInput"]);

app.controller('tagsDemoCntrl',Cntrl);
function Cntrl(){
  this.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];
}