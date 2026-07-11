document.addEventListener("DOMContentLoaded", () => {
  
  const products = [
    {name: "Men's Cotton T-Shirt", price: "Rs 1299", oldPrice: "Rs 1999", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", link: "#", category: "Clothes"},
    {name: "Women's Summer Dress", price: "Rs 2499", oldPrice: "Rs 3999", image: "https://images.unsplash.com/photo-1515378791036-0648ba3ef45b?w=400", link: "#", category: "Clothes"},
    {name: "Sports Running Shoes", price: "Rs 4999", oldPrice: "Rs 7999", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", link: "#", category: "Clothes"},
    {name: "Laptop Backpack Bag", price: "Rs 1899", oldPrice: "Rs 2999", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", link: "#", category: "Bags"},
    {name: "Leather Wallet", price: "Rs 999", oldPrice: "Rs 1599", image: "https://images.unsplash.com/photo-1625505826533-a8bc48c4db1c?w=400", link: "#", category: "Bags"},
    {name: "Wireless Earbuds", price: "Rs 2999", oldPrice: "Rs 5999", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", link: "#", category: "Electronics"},
    {name: "Smart Watch", price: "Rs 7999", oldPrice: "Rs 12999", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", link: "#", category: "Electronics"},
    {name: "Bluetooth Speaker", price: "Rs 3499", oldPrice: "Rs 5499", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", link: "#", category: "Electronics"},
    {name: "Mobile Phone Cover", price: "Rs 499", oldPrice: "Rs 999", image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400", link: "#", category: "Accessories"},
    {name: "Sunglasses", price: "Rs 1499", oldPrice: "Rs 2499", image: "https://images.unsplash.com/photo-1511499767150-a48a237f8fa8?w=400", link: "#", category: "Accessories"},
    {name: "Kitchen Blender", price: "Rs 5999", oldPrice: "Rs 8999", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400", link: "#", category: "Home"},
    {name: "LED Table Lamp", price: "Rs 2199", oldPrice: "Rs 3499", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", link: "#", category: "Home"}
  ];

  let productDiv = document.getElementById("products");
  let categoryDiv = document.getElementById("categories");
  let searchInput = document.getElementById("search");

  let categories = ["All", "Clothes", "Bags", "Electronics", "Accessories", "Home"];
  categories.forEach(cat => {
    categoryDiv.innerHTML += `<button class="cat-btn" onclick="filterCat('${cat}')">${cat}</button>`;
  });

  function showProducts(list) {
    productDiv.innerHTML = "";
    list.forEach(p => {
      productDiv.innerHTML += `
        <div class="card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p class="price">${p.price} <span class="old">${p.oldPrice}</span></p>
          <button class="btn" onclick="alert('Added ${p.name} to Cart!')">🛒 Buy Now</button>
        </div>
      `;
    });
  }

  window.filterCat = function(cat) {
    if(cat == "All") showProducts(products);
    else showProducts(products.filter(p => p.category == cat));
  }

  searchInput.addEventListener("keyup", () => {
    let val = searchInput.value.toLowerCase();
    showProducts(products.filter(p => p.name.toLowerCase().includes(val)));
  });

  showProducts(products);
});
