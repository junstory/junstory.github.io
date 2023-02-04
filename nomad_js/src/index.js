
const loginform = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS = "hide";
const USER_KEY = "name"

function onLoginBtnClick(event){
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem(USER_KEY,name);
    loginform.classList.add(HIDDEN_CLASS);
    printGreeting(name);
    
}

function printGreeting(username){
    greeting.innerHTML = `Welcome ${username}!`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const saveUsername = localStorage.getItem(USER_KEY);
if (saveUsername == null){
    loginform.classList.remove(HIDDEN_CLASS);
    loginform.addEventListener("submit", onLoginBtnClick);
}else{
    printGreeting(saveUsername);
}