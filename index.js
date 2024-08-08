// Get references to DOM elements
const input = document.getElementById("input");
const listItem = document.getElementById("list-item");

// Function to add a new item to the list
function addItem() {
    if (input.value.trim() === '') {
        console.log("Empty input");
        return;
    }
    
    // Create new list item and add it to the list
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listItem.appendChild(li);
    
    // Create and add delete button to the list item
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";  // '×' character for delete
    li.appendChild(span);
    
    // Clear input field
    input.value = '';
    
    // Save updated list to localStorage
    saveData();
}

// Event listener for clicks on list items or delete buttons
listItem.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  // Toggle the checked state
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  // Remove the item
    }
    
    // Save updated list to localStorage
    saveData();
}, false);

// Event listener to add item on Enter key press
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();  // Prevent form submission or other default behavior
        addItem();
    }
});

// Function to save the list data to localStorage
function saveData() {
    localStorage.setItem("data", listItem.innerHTML);
}

// Function to display tasks from localStorage
function showTask() {
    // Get the saved list from localStorage and set it to listItem
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listItem.innerHTML = savedData;
    }
}

// Initialize the display of tasks
showTask();
