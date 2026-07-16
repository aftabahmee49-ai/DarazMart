document.addEventListener("DOMContentLoaded", () => {
  
  const products = [
    {name: "Men's Cotton T-Shirt", price: "Rs 1299", oldPrice: "Rs 1999", image: "https://cdn.shopify.com/s/files/1/0565/2723/6411/products/1_540x.jpg", category: "Clothes"},
    {name: "Women's Summer Dress", price: "Rs 2499", oldPrice: "Rs 3999", image: "https://cdn.shopify.com/s/files/1/0266/9191/products/product-image-1593549482_540x.jpg", category: "Clothes"},
    {name: "Sports Running Shoes", price: "Rs 4999", oldPrice: "Rs 7999", image: "https://cdn.shopify.com/s/files/1/0283/0185/products/main-product-photo_540x.jpg", category: "Clothes"},
    {name: "Laptop Backpack Bag", price: "Rs 1899", oldPrice: "Rs 2999", image: "https://cdn.shopify.com/s/files/1/0153/0623/products/backpack_540x.jpg", category: "Bags"},
    {name: "Leather Wallet", price: "Rs 999", oldPrice: "Rs 1599", image: "https://cdn.shopify.com/s/files/1/0587/1234/products/wallet_540x.jpg", category: "Bags"},
    {name: "Wireless Earbuds", price: "Rs 2999", oldPrice: "Rs 5999", image: "https://cdn.shopify.com/s/files/1/0550/1234/products/earbuds_540x.jpg", category: "Electronics"},
    {name: "Smart Watch", price: "Rs 7999", oldPrice: "Rs 12999", image: "https://cdn.shopify.com/s/files/1/0213/1234/products/watch_540x.jpg", category: "Electronics"},
    {name: "Bluetooth Speaker", price: "Rs 3499", oldPrice: "Rs 5499", image: "https://cdn.shopify.com/s/files/1/0556/1234/products/speaker_540x.jpg", category: "Electronics"},
    {name: "Mobile Phone Cover", price: "Rs 499", oldPrice: "Rs 999", image: "https://cdn.shopify.com/s/files/1/0273/1234/products/cover_540x.jpg", category: "Accessories"},
    {name: "Sunglasses", price: "Rs 1499", oldPrice: "Rs 2499", image: "https://cdn.shopify.com/s/files/1/0589/1234/products/glasses_540x.jpg", category: "Accessories"},
    {name: "Kitchen Blender", price: "Rs 5999", oldPrice: "Rs 8999", image: "https://cdn.shopify.com/s/files/1/0567/1234/products/blender_540x.jpg", category: "Home"},
    {name: "LED Table Lamp", price: "Rs 2199", oldPrice: "Rs 3499", image: "https://cdn.shopify.com/s/files/1/0591/1234/products/lamp_540x.jpg", category: "Home"}
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
          <img src="${p.image}" alt="${p.name}" loading="lazy">
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

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Auto slider har 3 second baad
setInterval(() => { plusSlides(1) }, 3000);

// LOGIN POPUP KA CODE
function openLogin() {
  document.getElementById("loginPopup").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginPopup").style.display = "none";
}
