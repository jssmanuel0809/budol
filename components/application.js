// Update the IDs and dropdown content for month, day, year, and gender dropdowns
const monthDropdown = document.getElementById("monthDropdown");
const dayDropdown = document.getElementById("dayDropdown");
const yearDropdown = document.getElementById("yearDropdown");
const genderDropdown = document.getElementById("genderDropdown");

// Code to populate the dropdown options for month
function populateMonths() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  months.forEach((month, index) => {
    const option = document.createElement('li');
    option.classList.add('item');
    option.textContent = month;
    option.addEventListener('click', () => {
      monthDropdown.querySelector(".selected-display").innerHTML = month;
    });
    monthDropdown.querySelector('ul').appendChild(option);
  });
}

// Code to populate the dropdown options for day
function populateDays() {
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('li');
    option.classList.add('item');
    option.textContent = i;
    option.addEventListener('click', () => {
      dayDropdown.querySelector(".selected-display").innerHTML = i;
    });
    dayDropdown.querySelector('ul').appendChild(option);
  }
}

// Code to populate the dropdown options for year
function populateYears() {
  const currentYear = new Date().getFullYear();
  for (let i = 1930; i <= currentYear; i++) {
    const option = document.createElement('li');
    option.classList.add('item');
    option.textContent = i;
    option.addEventListener('click', () => {
      yearDropdown.querySelector(".selected-display").innerHTML = i;
    });
    yearDropdown.querySelector('ul').appendChild(option);
  }
}

// Code to populate the dropdown options for gender
function populateGenders() {
  const genders = ['Male', 'Female', 'Other'];
  genders.forEach((gender) => {
    const option = document.createElement('li');
    option.classList.add('item');
    option.textContent = gender;
    option.addEventListener('click', () => {
      genderDropdown.querySelector(".selected-display").innerHTML = gender;
    });
    genderDropdown.querySelector('ul').appendChild(option);
  });
}

// Populate dropdown options for month, day, year, and gender
populateMonths();
populateDays();
populateYears();
populateGenders();

// Code to handle dropdown functionality for month, day, year, and gender
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}

// Event listeners for month, day, year, and gender dropdowns
monthDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  let arrow = monthDropdown.children[1];
  handleDropdown(monthDropdown, arrow, !monthDropdown.classList.contains("active"));
});

dayDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  let arrow = dayDropdown.children[1];
  handleDropdown(dayDropdown, arrow, !dayDropdown.classList.contains("active"));
});

yearDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  let arrow = yearDropdown.children[1];
  handleDropdown(yearDropdown, arrow, !yearDropdown.classList.contains("active"));
});

genderDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  let arrow = genderDropdown.children[1];
  handleDropdown(genderDropdown, arrow, !genderDropdown.classList.contains("active"));
});

// Check if anything else other than the dropdown is clicked
window.addEventListener("click", function (e) {
  if (e.target.closest(".wrapper-dropdown") === null) {
    closeAllDropdowns();
  }
});

// Close all the dropdowns
function closeAllDropdowns() {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown");
  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    let arrow = selected.children[1];
    handleDropdown(selected, arrow, false);
  });
}
