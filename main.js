const save = document.getElementById('save');
const delet_task = document.getElementById('delet')
const task_list = document.getElementById('task_list');
const task_value = document.getElementById('task_value');
let total_count = document.getElementById("count")
let task = JSON.parse(localStorage.getItem("key")) || []

document.addEventListener("DOMContentLoaded", function(event){
    save.addEventListener("click", addTask)
    delet_task.addEventListener("click",deletTask)
    task_value.addEventListener('keydown', (e) => {
        if(e.key == "Enter") {
            addTask() 
        }
    })
    displayTask()
})

function addTask(){
    let new_task = task_value.value.trim()
    if(new_task !== "" ){
        task.push({name: new_task, disabled: false})
        task_value.value = ""
    }
    setStorage()
    displayTask()
}

function displayTask(){
    task_list.innerHTML = ""
    task.forEach((item, index) => {
        let li = document.createElement('li')
        li.innerHTML = ` <div class="d-flex gap-1 align-item-center ">
                    <input type="checkbox"  class="todo-checbox " ${item.disabled ? "checked" : ""}/>
                    <span class="${item.disabled ? "disabled" : ""}">${item.name}</span>
                 </div>`
               li.querySelector(".todo-checkbox").addEventListener("change", function(){
                 toggleTask(index)
               })

        task_list.appendChild(li)
    })   
    total_count.innerText = task.length
}

function setStorage () {
    localStorage.setItem("key", JSON.stringify(task))
}
function deletTask(){
    task = []
    setStorage()
    displayTask()
}
function toggleTask(index){
      console.log(index);
      
}

