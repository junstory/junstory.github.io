
const clock = document.querySelector("#clock");


function setClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `<h1>${hour}:${min}:${sec}</h1>`;
}

setInterval(setClock, 1000);