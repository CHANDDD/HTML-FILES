var app=angular.module("todoApp",[]);
app.controller("todoCntrl",todoCntrl);
function todoCntrl(){
    this.editmode=false;
    this.todos=[
        "Learn AngularJs",
        "Prepare food",
        "play Badmintion",
    ];
    this.addNewTodo=function(){
        this.todos.push(this.newTodo);
        this.newTodo="";
        }
        this.triggerEditMode=function(){
            this.editmode=!this.editmode;
        }
        this.deleteTodo=function(index){
            this.todos.splice(index,1);
        }
}