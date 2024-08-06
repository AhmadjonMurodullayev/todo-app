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
    li.innerHTML = ` <div class=" justify-between grid grid-cols-4 items-center ">
                    <input type="checkbox"  class="todo-checkbox " ${
                      item.disabled ? "checked" : ""
                    }/>
                    <span class="${item.disabled ? "disabled" : ""}">${
      item.name
    }</span>
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id="edit_btn">edit</button>
    <button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" id="delete_btn">delete</button>
                 </div>`;
    task_list.appendChild(li);
    li.querySelector(".todo-checkbox").addEventListener("change", function () {

      item.disabled = !item.disabled;
      setStorage()
    });
    li.querySelector("#edit_btn").addEventListener("click", function () {
        let nemitem = prompt("edit", item.name)
        if (nemitem !== "") {
            item.name = nemitem.trim()
        }
        setStorage()
        displayTask()
      });
    li.querySelector("#delete_btn").addEventListener("click", function () {
        task.splice(index,1)
        setStorage()
        displayTask()
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
  console.log(index);
}
