function toggleContainer() {
  var container = document.getElementById("box");
  var buttonContainer = document.getElementById("buttonContainer");

  // Check if the new buttons already exist
  var existingButtons = document.querySelectorAll('.newButton');
  if (existingButtons.length > 0) {
    // If they exist, remove them
    existingButtons.forEach(function(button) {
      buttonContainer.removeChild(button);
    });
    // Reset background color and collapse container when hiding buttons
    container.style.backgroundColor = '';
    container.style.height = 'auto';
  } else {
    // If they don't exist, create and append two new buttons
    for (var i = 1; i <= 2; i++) {
      var newButton = document.createElement("button");
      newButton.className = "newButton";
      newButton.textContent = "New Button " + i;
      buttonContainer.appendChild(newButton);
    }
    // Set background color and expand container when showing buttons
    container.style.backgroundColor = '#F8EFEF';
    container.style.height = "450px";
  }
}
