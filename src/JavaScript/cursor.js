const cursor = document.querySelector(".cursor");  // Select the cursor element from the DOM
let timeout;  // Declare a variable to store the timeout ID

// Event listener for mouse movement
document.addEventListener("mousemove", (event) => {
    // Get the mouse coordinates
    const x = event.pageX;
    const y = event.pageY;

    // Update the cursor position
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // Clear the timeout if mouse movement occurs
    clearTimeout(timeout);

    // Set a new timeout for hiding the cursor after 1000 milliseconds (1 second)
    timeout = setTimeout(() => {
        cursor.style.display = "none";
    }, 1000);
});

// Event listener for mouse leaving the document
document.addEventListener("mouseout", () => {
    // Hide the cursor when the mouse leaves the document
    cursor.style.display = "none";
});

