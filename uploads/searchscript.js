const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const recentSearchList = document.getElementById("recent-search-list");

// Function to load recent searches from localStorage
function loadRecentSearches() {
const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
recentSearchList.innerHTML = ""; // Clear the list

// Ensure that the parent list can wrap items
recentSearchList.style.display = "flex";
recentSearchList.style.flexWrap = "wrap"; // This allows items to move to the next line when space is filled
recentSearchList.style.gap = "10px"; // Optional: Space between items

recentSearches.forEach((search) => {
  const listItem = document.createElement("li");
  listItem.textContent = search;
  listItem.style.display = "flex";
  listItem.style.maxWidth = "calc(33% - 10px)"; // Set a max width for each item (e.g., 33% of the container)
  listItem.style.alignItems = "center"; // Center vertically
  listItem.style.justifyContent = "center"; // Center horizontally
  listItem.style.padding = "5px 15px"; 
  listItem.style.cursor = "pointer";
  listItem.style.border = "1px solid #ccc";
  listItem.style.borderRadius = "15px";
  listItem.style.backgroundColor = "#f8f9fa";
  listItem.style.whiteSpace = "nowrap"; // Prevent text wrapping
  listItem.style.fontSize = "10px"; // Adjust font size for better centering
  listItem.addEventListener("click", () => {
      searchInput.value = search; // Fill the search bar when clicked
  });
  recentSearchList.appendChild(listItem);
});
}
function loadRecentSearches() {
const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
recentSearchList.innerHTML = ""; // Clear the list

// Ensure that the parent list can wrap items
recentSearchList.style.display = "flex";
recentSearchList.style.flexWrap = "wrap"; // This allows items to move to the next line when space is filled
recentSearchList.style.gap = "10px"; // Optional: Space between items

recentSearches.forEach((search, index) => {
  const listItem = document.createElement("li");
  listItem.textContent = search;
  listItem.style.display = "flex";
  listItem.style.maxWidth = "calc(33% - 10px)"; // Set a max width for each item (e.g., 33% of the container)
  listItem.style.alignItems = "center"; // Center vertically
  listItem.style.justifyContent = "center"; // Center horizontally
  listItem.style.padding = "5px 15px"; 
  listItem.style.cursor = "pointer";
  listItem.style.border = "1px solid #ccc";
  listItem.style.borderRadius = "15px";
  listItem.style.backgroundColor = "#f8f9fa";
  listItem.style.whiteSpace = "nowrap"; // Prevent text wrapping
  listItem.style.fontSize = "10px"; // Adjust font size for better centering
  listItem.addEventListener("click", () => {
      searchInput.value = search; // Fill the search bar when clicked
  });

  // Create a cancel button with an "X" (cross) mark
  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = '✖'; // Unicode for cross mark
  cancelButton.style.marginLeft = "10px";
  cancelButton.style.fontSize = "12px"; // Adjust the font size for the "X"
  cancelButton.style.padding = "0 5px";
  cancelButton.style.cursor = "pointer";
  cancelButton.style.border = "none";
  cancelButton.style.backgroundColor = "transparent";
  cancelButton.style.color = "#black"; // Red color for the cross
  cancelButton.style.fontWeight = "bold";

  cancelButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the list item click event from triggering
      recentSearches.splice(index, 1); // Remove the clicked search from the array
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches)); // Update the localStorage
      loadRecentSearches(); // Re-render the list
  });

  // Append the cancel button to the list item
  listItem.appendChild(cancelButton);

  // Append the list item to the list
  recentSearchList.appendChild(listItem);
});
}


// Function to handle form submission
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  const query = searchInput.value.trim();

  if (query) {
    // Save the search query to localStorage
    let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    if (!recentSearches.includes(query)) {
      if (recentSearches.length >= 20) recentSearches.pop(); // Limit to 5 items
      recentSearches.unshift(query); // Add new search to the top
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }

    // Clear the input field and reload recent searches
    searchInput.value = "";
    loadRecentSearches();
  }
});

// Load recent searches on page load
document.addEventListener("DOMContentLoaded", loadRecentSearches);
