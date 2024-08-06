let todo = [{
    id: 1,
    title: "Uxlash",
    completed: false
},]

const tBody = document.querySelector("tbody");
const elText = document.querySelector(".name_inpt");
const elBtn = document.querySelector("#btn");
const elForm = document.querySelector("form");

elBtn.addEventListener("click", (ect) =>{
    evt.preventDefault();
    console.log(elText.value);  
    const date = new Date();
    let createdAt = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "-" + 
    date.getHours() + ":" + date.getMinutes()

    let newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title: elText.value,
        createdAt: createdAt,
        isCompleted: false
    }
    todos.push(newTodo);
    domgaChiqarator(todo = []){
        tBody.innerHTML = "";
        todo.forEach((todo) => {
            tBody.innerHTML += `
            <tr>
                <td>${todo.todo}</td>
                <td>${todo.createdAt}</td>
                <td class="text-right pr-4">
                    <button id="${todo.id}" class="bg-red-500 py-2 px-4 rounded-md text-white hover:bg-red-600">Edit</button>
                    <button id="${todo.id}" class="bg-red-500 py-2 px-4 rounded-md text-white hover:bg-red-600">delete</button>
            </tr>
            `
        })
    }
})