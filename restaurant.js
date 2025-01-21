// restaurant array
let restaurant = [
  { name: "Taco Tuesday",
    cuisine: "Mexican",
    location: "Chattnoches,NY",
    rating: "2.5" },
  {
  name: "Cheeseburger Wednesday",
    cuisine: "American",
    location: "Chattnoches,NY",
    rating: "4.5" },
 
  {
    name: "Lamb Thursday",
    cuisine: "Mexican",
    location: "Chattnoches,NY",
    rating:"3.2" },
  
];

// Function to render the array
function renderRestaurant(restaurantArray) {
  // Enter container where the restaurant will be displayed
  const container = document.getElementById("restaurant-container");

  // Loop through each  and create its HTML
  restaurantArray.forEach((restaurant) => {
    // Create a div for each restaurant
    const restaurantDiv = document.createElement("div");

    // Add the  information
    restaurantDiv.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p>Cuisins: ${restaurant.cuisine}</p>
      <p>Location: ${restaurant.location}</p>
      <p>Rating: ${restaurant.rating}</p>
    `;

    // Append the div to the container
    container.appendChild(restaurantDiv);
  });
}

// Call the function with the array
renderRestaurant(restaurant);
