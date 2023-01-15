
let taskInput = document.getElementById("task-input");
let daySelect = document.getElementById("day-select");
let addTaskBtn = document.getElementById("add-task");

let form = document.getElementById("task-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  let taskValue = taskInput.value;
  let day = daySelect.value;
  let newTask = document.createElement("li");
  newTask.innerHTML = taskValue + ' <button class="delete-task">Eliminar</button>';
  newTask.querySelector('.delete-task').addEventListener('click', (event) => {
    newTask.remove();
  });
  document.getElementById(day).appendChild(newTask);
  taskInput.value = "";
  daySelect.value = "";
});