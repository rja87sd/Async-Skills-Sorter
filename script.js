// Used ChatGPT for code organization, comments, and help with figuring out how to get .sort to work.
"use strict";

// Define an asynchronous function to sort skills data
async function sortMySkills() {
  try {
    // Fetch the skills data from the JSON file
    const response = await fetch("skills.json");
    // Parse the JSON data from the response
    const parsedJson = await response.json();
    // Log the parsed JSON data to the console
    console.log(parsedJson);

    // Sort the parsed JSON data by the "level" property in descending order
    const sortedData = parsedJson.sort((a, b) => b.level - a.level);
    // Get the HTML element where the sorted data will be displayed
    const sortList = document.getElementById("sort-list");
    // Log the sorted data to the console
    console.log(sortedData);

    // Iterate over each item in the sorted data array
    sortedData.forEach((item) => {
      // Create a new list item element for each skill
      const listItem = document.createElement("li");
      // Set the text content of the list item to display the skill name and level
      listItem.innerText = `${item.skillname}: Level ${item.level}`;
      // Append the list item to the HTML element where the sorted data will be displayed
      sortList.appendChild(listItem);
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
  }
}

// Call the sortMySkills function to initiate the sorting and display process
sortMySkills();
