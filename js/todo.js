const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

const removeTodo = (idx) => {
  todos = todos.filter((todo, i) => idx !== i);
  todoList.innerHTML = "";
  todos.forEach((todo, idx) => printTodo(todo, idx));
  localStorage.setItem("todos", JSON.stringify(todos));
};

const printTodo = (todo, idx) => {
  const todoItem = document.createElement("li");
  const todoContent = document.createElement("span");
  todoContent.classList.add("todoContent");
  todoContent.innerText = todo;
  todoContent.dataset.id = idx;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("custom-btn");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-x");
  deleteButton.innerHTML = `<i class="fa-solid fa-x"></i>`;
  deleteButton.addEventListener("click", () => removeTodo(idx));

  todoItem.appendChild(todoContent);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  todoInput.value = "";
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  todos.push(todoInput.value);
  todoList.innerHTML = "";
  todos.forEach((todo, idx) => printTodo(todo, idx));
  localStorage.setItem("todos", JSON.stringify(todos));
});
