
const todoForm = document.querySelector("#todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li );
}

function onTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj ={
        text : newTodo,
        id : Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",onTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}