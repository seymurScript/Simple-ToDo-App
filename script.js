var cardBody = document.querySelector("#cardbody");
var todoInput = document.querySelector("#todo-input");
var addBtn = document.querySelector("#todo-add");
var todoList = document.querySelector("#todo-list");
var clearAllBtn = document.querySelector("#clear-all");

eventListeners();
var ram = [];
function eventListeners(){
    addBtn.addEventListener("click",addTodo);
    clearAllBtn.addEventListener("click",allClear);
    cardBody.addEventListener("click",deleteItem);


}
function showTodo(value){
    listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between ";
    removeIcon = document.createElement("i");
    removeIcon.className = "btn btn-close";
    removeIcon.style.scale = "0.5";
    trunction = document.createElement("span");
    trunction.className = "d-inline text-truncate";
    trunction.style.maxWidth = "170px";
    trunction.appendChild(document.createTextNode(value));
    listItem.appendChild(trunction);
    listItem.appendChild(removeIcon);
    todoList.appendChild(listItem);
    todoInput.value = "";

}
function addTodo(){
    var value = todoInput.value.trim();
    if (!value.trim()){
        alert("Zəhmət olmasa boşluğu doldurun!!!");
    }
    else {
        ram.push(value);
        console.log(ram);
        showTodo(value);
    }
}
function allClear(){
    ram = [];
    todoList.innerHTML = "";
}

function deleteItem(e){
    if (e.target.className === "btn btn-close"){
        
        e.target.parentElement.remove();
        var removedData = ram.indexOf(e.target.parentElement.textContent);
        if (removedData > -1){
            ram.splice(removedData,1);
        }
        console.log("Yaddaş:",ram);
    }

}