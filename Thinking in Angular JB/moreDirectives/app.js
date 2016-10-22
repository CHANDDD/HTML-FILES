var app=angular.module("moreDirectives",[]);
app.controller("moreDirectivesCntrl",DirectivesCntrl);
function DirectivesCntrl(){
    this.myList=[
        {'name':"Roop",'age':25},
        {'name':"chand",'age':24},
        {'name':"Nelluri",'age':24},
        {'name':"Kolli",'age':26}
    ];
}