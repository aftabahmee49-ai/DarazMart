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
      image: "https://via.placeholder.com/200x200/00d2d3/fff?text=Earbuds",
      https://www.daraz.pk/products/zero-rover-pro-wireless-earbuds-bluetooth-53v-gaming-earbuds-11mm-base-driver-earbuds-quad-mic-enc-earbuds-for-calling-noise-cancelling-earbuds-bluetooth-earbuds-for-ios-and-android-best-earbuds-for-men-and-women-i596345009-s2749743739.html?pvid=bdb8a8ff-4594-49d2-9265-00bafe8054bd&search=jfy&scm=1007.51705.481011.0&priceCompare=skuId%3A2749743739%3Bsource%3Atpp-recommend-plugin-41701%3Bip%3A33.65.2.215%3Bsn%3Abdb8a8ff-4594-49d2-9265-00bafe8054bd%3BunionTrace%3A2141358617837114129176719e6a6f%3BoriginPrice%3A379900%3BsubsidyPrice%3A379900%3BacrossSubsidyPrice%3A379900%3BshopPrice%3A379900%3BvoucherPrice%3A379900%3BdisplayPrice%3A379900%3BisGray%3Afalse%3BsinglePromotionId%3A50000073336006%3BsingleToolCode%3ApromPrice%3BvoucherPricePlugin%3A1%3BbuyerId%3A0%3BnewBuyer%3Afalse%3Btimestamp%3A1783711413006%3BisPreHeat%3Afalse%3BisPreHeat%3Afalse%3BitemType%3A0&spm=a2a0e.tm80335142.jfy.dJFY_all_7
      link: "https://daraz.pk"
    },
    {
      name: "Power Bank 20000mAh",
      price: "Rs 3999",
      image: "https://via.placeholder.com/200x200/ee5a24/fff?text=Power+Bank",
      link: "https://daraz.pk"
    },

    // HOME & DAILY USE
    {
      name: "Kitchen Blenhttps://www.daraz.pk/products/
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
