const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText) {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(text) {
  const task = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  tasks.push(task);
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function clearAllTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    tasks = [];
    renderTasks();
  }
}

function updateClearButton() {
  const clearBtn = document.getElementById("clearAllBtn");
  clearBtn.disabled = tasks.length === 0;
}

// Update the renderTasks function to also update the clear button
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
    taskList.appendChild(li);
  });

  updateClearButton(); // Add this line
}
