document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    window.addTask = function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            // Create new list item
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="removeTask(this)">Remove</button>
            `;
            
            // Append the new task to the list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = "";
        }
    };

    // Function to remove a task
    window.removeTask = function (element) {
        const listItem = element.parentElement;
        taskList.removeChild(listItem);
    };
});