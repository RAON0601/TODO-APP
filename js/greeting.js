const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const greeting = document.querySelector("#greeting");
const header = document.querySelector("#header");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function printGreeting(username) {
  greeting.innerHTML = `안녕하세요 ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  header.classList.add(HIDDEN_CLASSNAME);
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  printGreeting(username);
});
