document.addEventListener("DOMContentLoaded", () => {
  
  let products = [
    // CLOTHES
    {
      name: "Men's Cotton T-Shirt",
      price: "Rs 1299",
      image: "https://via.placeholder.com/200x200/ff6b6b/fff?text=T-Shirt",
      link: "https://daraz.pk"
    },
    {
      name: "Women's Lawn 2-Piece",
      price: "Rs 3499",
      image: "https://via.placeholder.com/200x200/feca57/fff?text=Lawn+Suit",
      link: "https://daraz.pk"
    },
    {
      name: "Jeans For Men",
      price: "Rs 2299",
      image: "https://via.placeholder.com/200x200/48dbfb/fff?text=Jeans",
      link: "https://daraz.pk"
    },

    // BAGS
    {
      name: "School Backpack",
      price: "Rs 1899",
      image: "https://via.placeholder.com/200x200/1dd1a1/fff?text=Backpack",
      link: "https://daraz.pk"
    },
    {
      name: "Ladies Hand Bag",
      price: "Rs 1599",
      image: "https://via.placeholder.com/200x200/ff9ff3/fff?text=Hand+Bag",
      link: "https://daraz.pk"
    },
    {
      name: "Travel Duffle Bag",
      price: "Rs 2799",
      image: "https://via.placeholder.com/200x200/5f27cd/fff?text=Duffle+Bag",
      link: "https://daraz.pk"
    },

    // ELECTRONICS
    {
      name: "Wireless Earbuds",
      price: "Rs 2999",
      image: "https://via.placeholder.com/200x200/
  
      link: "https://daraz.pk"
    },

    // HOME & DAILY USE
    {
      name: "Kitchen Blender",
      price: "Rs 4999",
      image: "https://via.placeholder.com/200x200/c8d6e5/000?text=Blender",
      link: "https://daraz.pk"
    },
    {
      name: "LED Study Lamp",
      price: "Rs 999",
      image: "https://via.placeholder.com/200x200/f368e0/fff?text=Lamp",
      link: "https://daraz.pk"
    },
    {
      name: "Water Bottle 1L",
      price: "Rs 499",
      image: "https://via.placeholder.com/200x200/0abde3/fff?text=Bottle",
      link: "https://daraz.pk"
    },
    {
      name: "Prayer Mat",
      price: "Rs 799",
      image: "https://via.placeholder.com/200x200/10ac84/fff?text=Jaye+Namaz",
      link: "https://daraz.pk"
    }
  ];

  let productDiv = document.getElementById("products");

  products.forEach(product => {
    productDiv.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <a href="${product.link}" target="_blank" class="btn">Buy Now</a>
      </div>
    `;
  });

});
