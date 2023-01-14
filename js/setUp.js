window.onload = () => {
  const username = localStorage.getItem(USERNAME_KEY);

  if (username !== null) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    printGreeting(username);
  } else {  
    header.classList.add(HIDDEN_CLASSNAME);
  }

  todos = JSON.parse(localStorage.getItem("todos"));
  if (todos === null) {
    todos = [];
  }
  todoList.innerHTML = "";
  todos.forEach((todo, idx) => printTodo(todo, idx));
};
