// Function to create a scrollable dropdown
function createScrollableDropdown(containerId, options, displayId) {
  const container = document.getElementById(containerId);
  const display = document.getElementById(displayId);

  const ul = document.createElement("ul");
  ul.classList.add("dropdown");
  ul.classList.add("scrollable-menu");

  options.forEach((option) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = option;
    li.addEventListener("click", () => {
      display.innerHTML = option;
      closeAllDropdowns();
    });
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

//dropdowns for month, day, year, and gender
createScrollableDropdown(
  "monthDropdown",
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  "monthDisplay"
);
createScrollableDropdown(
  "dayDropdown",
  Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
  "dayDisplay"
);
createScrollableDropdown(
  "yearDropdown",
  Array.from({ length: new Date().getFullYear() - 1930 + 1 }, (_, i) =>
    (1930 + i).toString()
  ),
  "yearDisplay"
);
createScrollableDropdown(
  "genderDropdown",
  ["Male", "Female", "Other"],
  "genderDisplay"
);

// Event listeners for month, day, year, and gender dropdowns
document.querySelectorAll(".wrapper-dropdown").forEach((dropdown) => {
  const arrow = dropdown.querySelector(".arrow");
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    handleDropdown(dropdown, arrow, !dropdown.classList.contains("active"));
  });
});

// Check if anything else other than the dropdown is clicked
window.addEventListener("click", function (e) {
  if (!e.target.closest(".wrapper-dropdown")) {
    closeAllDropdowns();
  }
});

// Close all the dropdowns
function closeAllDropdowns() {
  document.querySelectorAll(".wrapper-dropdown").forEach((dropdown) => {
    const arrow = dropdown.querySelector(".arrow");
    handleDropdown(dropdown, arrow, false);
  });
}

function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}
