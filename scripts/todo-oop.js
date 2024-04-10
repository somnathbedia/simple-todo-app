class Todos {
  todos = undefined;

  construtor() {
    this.todos = localStorage.getItem("todos");
  }

  saveToStorage(userTodo) {
    localStorage.setItem("todos", JSON.stringify(userTodo));
  }

  generateHTMLForTodos() {
    let todoHTML = "";
    userTodo.forEach((todo) => {
      todoHTML += `
        <div class="todos">
        <div class="check-box">
          <input class="todo-content done-checkbox" type="checkbox" />
        </div>
        <div class="description-container">
          <p class="todo-content todo-description">${todo.description}</p>
        </div>
        <div class="delete-button-container">
          <button class="todo-content delete-button">Remove <i class="fa-solid fa-trash fa-xl" style="color: #ffffff;"></i></button>
        </div>
      </div>
        `;
    });
      return todoHTML;
  }
    
    
}

const todo = new Todos();




