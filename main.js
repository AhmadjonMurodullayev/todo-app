const save = document.getElementById("save");
const delet_task = document.getElementById("delet");
const task_list = document.getElementById("task_list");
const task_value = document.getElementById("task_value");
let total_count = document.getElementById("count");
let task = JSON.parse(localStorage.getItem("key")) || [];

document.addEventListener("DOMContentLoaded", function (event) {
  save.addEventListener("click", addTask);
  delet_task.addEventListener("click", deletTask);
  task_value.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      addTask();
    }
  });
  displayTask();
});

function addTask() {
  let new_task = task_value.value.trim();
  if (new_task !== "") {
    task.push({ name: new_task, disabled: false });
    task_value.value = "";
  }
  setStorage();
  displayTask();
}

function displayTask() {
  task_list.innerHTML = "";
  task.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = ` <div class=" justify-between grid grid-cols-3 items-center gap-3 ">
                    <input type="checkbox"  class="todo-checkbox " ${
                      item.disabled ? "checked" : ""
                    }/>
                    <span id="todo-${index}" class="${
      item.disabled ? "disabled" : ""
    }" onclick="editTask(${index})">${item.name}</span >
    <button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" id="delete_btn">delete</button>
                 </div>`;
    task_list.appendChild(li);
    li.querySelector(".todo-checkbox").addEventListener("change", function () {
      item.disabled = !item.disabled;
      setStorage();
      displayTask();
    });

    li.querySelector("#delete_btn").addEventListener("click", function () {
      task.splice(index, 1);
      setStorage();
      displayTask();
    });
  });
  total_count.innerText = task.length;
}

function setStorage() {
  localStorage.setItem("key", JSON.stringify(task));
}
function deletTask() {
  task = [];
  setStorage();
  displayTask();
}
function toggleTask(index) {
  task[index].disabled = !task[index].disabled;
  setStorage();
  displayTask();
}
function editTask(index) {
  const todo_task = document.getElementById(`todo-${index}`);
  let input_element = document.createElement("input");
  todo_task.replaceWith(input_element);
  input_element.focus();
  input_element.value = task[index].name;
  input_element.addEventListener("change", function () {
    let updated_text = input_element.value;
    if (updated_text) {
      task[index].name = updated_text;
      setStorage();
    }
    displayTask();
  });
}
