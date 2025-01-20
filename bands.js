"use strict";


// bands array
let bands = [
  { name: "702",
     genre: "R&B", 
     members: 3, 
     formedYear: 1993, 
     isActive: false },
  {
    name: "Destiny's Child",
    genre: "R&B",
    members: 3,
    formedYear: 1990,
    isActive: false,
  },
  {
    name: "H-Town",
    genre: "R&B",
    members: 3,
    formedYear: 1991,
    isActive: true,
  },
];

// Function to render the bands array
function renderBands(bandsArray) {
  // Enter container where the bands will be displayed
  const container = document.getElementById("bands-container");

  // Loop through each band and create its HTML 
  bandsArray.forEach((band) => {
    // Create a div for each band
    const bandDiv = document.createElement("div");

    // Add the band's information
    bandDiv.innerHTML = `
      <h2>${band.name}</h2>
      <p>Genre: ${band.genre}</p>
      <p>Members: ${band.members}</p>
      <p>Formed Year: ${band.formedYear}</p>
      <p>Active: ${band.isActive}</p>
    `;

    // Append the band div to the container
    container.appendChild(bandDiv);
  });
}

// Call the function with the bands array
renderBands(bands);
