const addTaskTxt = document.getElementById("addTaskTxt");
const addTaskBtn = document.getElementById("addTaskBtn");
const deleteTaskBtn = document.getElementById("deleteTaskBtn");

addTaskBtn.addEventListener("click", () => {
  const taskText = addTaskTxt.value.trim();
  console.log(taskText);
  if (taskText) {
    const taskCard = document.createElement("div");
    taskCard.className = "taskCard";

    const taskContent = document.createElement("p");
    taskContent.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Task";
    deleteBtn.addEventListener("click", () => {
      taskCard.remove();
    });

    taskCard.appendChild(taskContent);
    taskCard.appendChild(deleteBtn);

    document.querySelector(".container").appendChild(taskCard);

    addTaskTxt.value = "";
  }
});

deleteTaskBtn.addEventListener("click", () => {
  const taskCard = document.querySelector(".taskCard");
  if (taskCard) {
    taskCard.remove();
  } else {
    alert("No task to delete.");
  }
});
