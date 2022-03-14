import AddNewTodo from "./AddNewTodo";
export default ValidateTodo;



function ValidateTodo(s){

    const todoTitle = document.getElementById('new-todo-header');
    const todoDescription = document.getElementById('new-todo-content');

    if(todoTitle.value == ""){
        todoTitle.classList.add("error");
    }
    if(todoDescription.value == ""){
        todoDescription.classList.add("error");
    }
    if(todoTitle.value == "" && todoDescription.value == ""){
        todoTitle.classList.add("error");
        todoDescription.classList.add("error");
    }

    if(todoTitle.value !== ""){
        todoTitle.classList.remove("error");
    }
    if(todoDescription.value !== ""){
        todoDescription.classList.remove("error");
    }

    if(todoDescription.value !== '' && todoTitle.value !== ''){
        AddNewTodo();
    }
}