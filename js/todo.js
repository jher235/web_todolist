const todoForm = document.querySelector("#todo-form");
//const todoInput = todoForm.querySelector("input");
const todoInput = document.querySelector("#todo-form input"); //위와 동일
const todoList = document.getElementById("todo-list")
const TODOS_KEY = "todos";
let todos = []

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos))
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))

}

function deleteTodo(event){
    const li = event.target.parentElement;
    todos = todos.filter((item)=> item.id !==parseInt(li.id))
    li.remove();
    saveTodos()

}


function paintTodo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");   
    const button = document.createElement("button");
    button.innerText = "☑️";
    list.appendChild(span);
    list.appendChild(button)
    span.innerText = newTodo.text;
    todoList.appendChild(list)
    button.addEventListener("click",deleteTodo)


}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj ={
        text:newTodo,
        id : Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}



todoForm.addEventListener("submit",handleTodoSubmit)

// function sayhi(item){

//     console.log("this is the turn of", item)
// }


const savedTodos = localStorage.getItem(TODOS_KEY)

console.log(savedTodos)
if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);

}




