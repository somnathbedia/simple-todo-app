let todos = JSON.parse(localStorage.getItem("todos"));

const inputElement = document.querySelector(".generate-todo");
const addButtonElement = document.querySelector(".add-button");
const descriptionElement = document.querySelector(".todo-description");

inputElement.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    todos.push({
      id: Math.floor(Math.random() * 1000),
      description: inputElement.value,
      done: false,
    });
    inputElement.value = "";
    saveToStorage(todos);
    location.reload();
    return;
  }
});

function saveToStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

addButtonElement.addEventListener("click", (event) => {
  todos.push({
    id: Math.floor(Math.random() * 1000),
    description: inputElement.value,
    done: false,
  });
  inputElement.value = "";
  saveToStorage(todos);
  location.reload();
  return;
});
const todoContentElem = document.querySelector(".js-todo-content");

let todoHTML = generateHTMLForTodos();
rederTodo(todoHTML);

function generateHTMLForTodos() {
  let todoHTML = "";
  todos.forEach((todo) => {
    todoHTML += `
        <div class="todos">
        <div class="check-box">
          <input class="todo-content done-checkbox js-checkbox" type="checkbox" data-todo-id="${todo.id}"/>
        </div>
        <div class="description-container">
          <p class="todo-content todo-description">${todo.description}</p>
        </div>
        <div class="delete-button-container">
          <button class="todo-content delete-button js-delete-button" data-todo-id="${todo.id}">Remove <i class="fa-solid fa-trash fa-sm" style="color: #ffffff;"></i></button>
        </div>
      </div>
        `;
  });

  return todoHTML;
}

function rederTodo(todoHTML) {
  todoContentElem.innerHTML = todoHTML;
}



/*

document.querySelectorAll(".todo-description").forEach((description) => {
    description.classList.add("overline");
});
*/

document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset.todoId);
    deleteTodo(button.dataset.todoId);
  });
});

function deleteTodo(id) {
  console.log(id);
  todos.forEach((todo, index) => {
    if (Number(todo.id) === Number(id)) {
      todos.splice(index, 1);
      saveToStorage(todos);
      location.reload();
    }
  });
}
