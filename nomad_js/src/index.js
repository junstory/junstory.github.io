
const loginform = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button")
const greeting = document.querySelector("#greeting")

function onLoginBtnClick(event){
    
    const name = loginInput.value;
    loginform.classList.add("hide");
    greeting.innerHTML = `Welcome ${name}!`;
    greeting.classList.remove("hide");
}

loginBtn.addEventListener("click", onLoginBtnClick);