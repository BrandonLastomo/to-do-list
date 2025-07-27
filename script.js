document.addEventListener("DOMContentLoaded", () => {
  const addTaskTxt = document.getElementById("addTaskTxt");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const container = document.querySelector(".container");

  // add task
  addTaskBtn.addEventListener("click", () => {
    const taskText = addTaskTxt.value.trim();
    if (!taskText) return;

    // Create new task card
    const taskCard = document.createElement("div");
    taskCard.className = "taskCard";
    taskCard.innerHTML = `
      <p class="task">${taskText}</p>
      <button class="deleteTaskBtn">Delete Task</button>
    `;

    // Add new card
    container.appendChild(taskCard);

    addTaskTxt.value = "";
  });

  // cross and delete task using event delegation
  container.addEventListener("click", (event) => {
    const target = event.target;

    // cross (mark as done) task
    if (target.classList.contains("task")) {
      target.classList.toggle("taskDone");
    }

    // delete task
    if (target.classList.contains("deleteTaskBtn")) {
      target.closest(".taskCard").remove();
    }
  });
});
