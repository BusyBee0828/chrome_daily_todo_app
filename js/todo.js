const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   // toDos 리스트의 내용을 localStorage에 저장 
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // 삭제하려는 대상(클릭한 항목)
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "😀";  // button의 텍스트 변경 
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);  // li는 span이라는 자식을 가지게 됨(span을 li 내부에 넣음)
    li.appendChild(button);  // button을 li 내부에 넣음 
    toDoList.appendChild(li);  // li를 toDoList 안에 넣음 
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;  // 사용자가 입력한 ToDo를 저장(값을 새로운 변수에 할당)
    toDoInput.value = "";   // input 박스를 비운다 
    const newTodoObj = {text:newTodo, id:Date.now(),}
    toDos.push(newTodoObj);  // newTodo를 toDos 리스트에 넣는다 
    paintToDo(newTodoObj);   // newTodo를 화면에 출력 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;  // 이전 값들이 있으면 그 값들로 toDos array를 시작 
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));   // array 내 각 item에 대해 arrow function을 실행 
    parsedToDos.forEach(paintToDo);
    // parsedToDos 배열의 각 항목에 대해 paintToDo를 실행 
}   

function myFilter(item){return item !== 3}