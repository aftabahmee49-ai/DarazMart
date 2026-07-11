document.addEventListener("DOMContentLoaded", () => {
  
  const products = [
    {name: "Men's Cotton T-Shirt", price: "Rs 1299", oldPrice: "Rs 1999", image: "https://via.placeholder.com/300x300/ff5722/ffffff?text=T-Shirt", link: "#", category: "Clothes"},
    {name: "Women's Summer Dress", price: "Rs 2499", oldPrice: "Rs 3999", image: "https://via.placeholder.com/300x300/e91e63/ffffff?text=Dress", link: "#", category: "Clothes"},
    {name: "Sports Running Shoes", price: "Rs 4999", oldPrice: "Rs 7999", image: "https://via.placeholder.com/300x300/4caf50/ffffff?text=Shoes", link: "#", category: "Clothes"},
    {name: "Laptop Backpack Bag", price: "Rs 1899", oldPrice: "Rs 2999", image: "https://via.placeholder.com/300x300/2196f3/ffffff?text=Bag", link: "#", category: "Bags"},
    {name: "Leather Wallet", price: "Rs 999", oldPrice: "Rs 1599", image: "https://via.placeholder.com/300x300/795548/ffffff?text=Wallet", link: "#", category: "Bags"},
    {name: "Wireless Earbuds", price: "Rs 2999", oldPrice: "Rs 5999", image: "https://via.placeholder.com/300x300/9c27b0/ffffff?text=Earbuds", link: "#", category: "Electronics"},
    {name: "Smart Watch", price: "Rs 7999", oldPrice: "Rs 12999", image: "https://via.placeholder.com/300x300/00bcd4/ffffff?text=Watch", link: "#", category: "Electronics"},
    {name: "Bluetooth Speaker", price: "Rs 3499", oldPrice: "Rs 5499", image: "https://via.placeholder.com/300x300/ff9800/ffffff?text=Speaker", link: "#", category: "Electronics"},
    {name: "Mobile Phone Cover", price: "Rs 499", oldPrice: "Rs 999", image: "https://via.placeholder.com/300x300/607d8b/ffffff?text=Cover", link: "#", category: "Accessories"},
    {name: "Sunglasses", price: "Rs 1499", oldPrice: "Rs 2499", image: "https://via.placeholder.com/300x300/000/ffffff?text=Glasses", link: "#", category: "Accessories"},
    {name: "Kitchen Blender", price: "Rs 5999", oldPrice: "Rs 8999", image: "https://via.placeholder.com/300x300/f44336/ffffff?text=Blender", link: "#", category: "Home"},
    {name: "LED Table Lamp", price: "Rs 2199", oldPrice: "Rs 3499", image: "https://via.placeholder.com/300x300/ffc107/000?text=Lamp", link: "#", category: "Home"}
  ];

  let productDiv = document.getElementById("products");
  let categoryDiv = document.getElementById("categories");
  let searchInput = document.getElementById("search");

  // Categories ke button banane
  let categories = ["All", "Clothes", "Bags", "Electronics", "Accessories", "Home"];
  categories.forEach(cat => {
    categoryDiv.innerHTML += `<button class="cat-btn" onclick="filterCat('${cat}')">${cat}</button>`;
  });

  // Products show karne ka function
  function showProducts(list) {
    productDiv.innerHTML = "";
    list.forEach(p => {
      productDiv.innerHTML += `
        <div class="card">
          <img src="${p.image}">
          <h3>${p.name}</h3>
          <p class="price">${p.price} <span class="old">${p.oldPrice}</span></p>
          <button class="btn" onclick="alert('Added ${p.name} to Cart!')">🛒 Buy Now</button>
        </div>
      `;
    });
  }

  // Category filter
  window.filterCat = function(cat) {
    if(cat == "All") showProducts(products);
    else showProducts(products.filter(p => p.category == cat));
  }

  // Search
  searchInput.addEventListener("keyup", () => {
    let val = searchInput.value.toLowerCase();
    showProducts(products.filter(p => p.name.toLowerCase().includes(val)));
  });

  // 
  showProducts(products);
});
