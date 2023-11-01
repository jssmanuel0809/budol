function toggleContainer() {
  var container = document.getElementById("box");
  var buttonContainer = document.getElementById("buttonContainer");

  // Check if the new buttons already exist
  var existingButtons = document.querySelectorAll('.newButton');
  if (existingButtons.length === 0) {
    // If they don't exist, create and append two new buttons
    var buttonNames = ["BUYER", "SELLER"]; // Change names as needed

    for (var i = 0; i < buttonNames.length; i++) {
      var newButton = document.createElement("button");
      newButton.className = "newButton";
      newButton.textContent = buttonNames[i];
      buttonContainer.appendChild(newButton);
    }
    // Set background color and expand container when showing buttons
    container.style.backgroundColor = '#F8EFEF';
    container.style.height += buttonContainer.offsetHeight;
  }
}
