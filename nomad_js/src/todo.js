
const todoForm = document.querySelector("#todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

function onTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
}

todoForm.addEventListener("submit",onTodoSubmit);