export default ValidateTodo;

function ValidateTodo(){

    const todoTitle = document.getElementById('new-todo-header');

    if(todoTitle.value == ""){
        todoTitle.classList.add("error");
    }
    if(todoTitle.value == ""){
        todoTitle.classList.add("error");
    }

    if(todoTitle.value !== ""){
        todoTitle.classList.remove("error");
    }
}