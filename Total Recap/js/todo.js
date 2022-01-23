const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// const toDos = []; // 이 부분이 항상 비어있게 되면 새로고침을 하더라도 새로운 것만 업댓됨. 아랫줄은 이를 해결하는 방법
let toDos = [];

// localStorage는 텍스트만 저장 가능, saveToDos 함수가 하는 일은 toDos arrya의 내용을 localstorage에 넣는 것
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON stringify로 toDos의 내용을 배열로 만들어줌
}

// button에 대한 이벤트 함수(어떤 버튼이 클릭된 것인지 부모 요소를 찾아서 해당 텍스트를 찾는다)
function deleteToDo(event) {
  //   console.dir(event.target.parentElement.innerText);
  //   console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo의 id가 li의 id와 다른 것을 남김(클릭한 li.id와 다른 toDo 남기기)
  saveToDos(); // 이 줄처럼 toDos DB에서 todo를 지운 뒤 한번 더 불러야 함
}

// paintToDo 함수는 화면에 보이게 하는 영역 담당
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// arrow function을 사용하면 아래와 같이 간단히 사용 가능
// function sayHello(item) {
//   console.log("this is the turn of", item)};

if (savedToDos !== null) {
  console.log(savedToDos);
  const parsedToDos = JSON.parse(savedToDos); //string을 javascript에서 사용 가능한 object로 만듬
  toDos = parsedToDos;
  //   parsedToDos.forEach((item) => console.log("this is the turn of", item));
  parsedToDos.forEach(paintToDo); // 바로 윗줄을 paintToDo로 바꿔주기만 하면 됨
}

// fliter 함수를 사용해서 지우고 싶은 item을 제외한 새로운 array를 만드는데, 필터 안의 값이 true면 그대로 새 array에도 반영
