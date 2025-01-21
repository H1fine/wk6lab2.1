// product array
let product = [
  { name: "Pillsbury Biscuits",
     category: 'frozen foods',
      price: 3.50,
       inStock: true },
  {
    name: "Maple Bacon",
     category: "Processed Meat",
      price: 4.97,
       inStock: true },
  
  {
    name: "Farmland Milk",
     category: "Dairy",
      price: 4.51,
       inStock: false }
];

// Function to render the productss array
function renderProducts(productArray) {
  // Enter container where the bands will be displayed
  const container = document.getElementById("product-container");

  // Loop through each and create its HTML
productsArray.forEach((product) => {
    // Create a div for each
    const productDiv = document.createElement("div");

    // Add the product information
productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <p>Category: ${product.category}</p>
      <p>Pricess: ${product.price}</p>
      <p>Instock: ${product.inStock}</p>
      
    `;

    // Append the div to the container
    container.appendChild(productDiv);
  });
}

// Call the function with the product array
renderProducts(product);
