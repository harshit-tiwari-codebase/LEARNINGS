// =======================
// DATA
// =======================
const arr = [
  { id: 1, name: "Watch", price: 1000, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60" },
  { id: 2, name: "Headphones", price: 2500, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60" },
  { id: 3, name: "Wireless Earbuds", price: 1800, img: "https://images.unsplash.com/photo-1505236273191-1dce886b01e9?w=600&auto=format&fit=crop&q=60" },
  { id: 4, name: "Bluetooth Speaker", price: 2200, img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&auto=format&fit=crop&q=60" },
  { id: 5, name: "Fitness Band", price: 1400, img: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60" },
  { id: 6, name: "Laptop", price: 55000, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60" },
  { id: 7, name: "Gaming Mouse", price: 1800, img: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=600&auto=format&fit=crop&q=60" },
  { id: 8, name: "Mechanical Keyboard", price: 4200, img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=60" },
  { id: 9, name: "Smartphone", price: 28000, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60" },
  { id: 10, name: "Power Bank", price: 1600, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=60" },
];

// =======================
// GLOBALS
// =======================
let cart = [];

let shopping = document.querySelector("#shopping");
let products = document.querySelector("#product-space");
let cartexpand = document.querySelector("#cart-expand");
let cartmid = document.querySelector("#card-mid");

let carttotal = document.querySelector("#total")

let flag = 0;        // cart toggle
let totalFlag = 0;   // calculator toggle
let total = 0;


// =======================
// SHOW PRODUCTS (UNCHANGED)
// =======================
function showproduct() {
  let clutter = "";

  arr.forEach((product, idx) => {
    clutter += `
      <div class="product">
        <img src="${product.img}" />
        <div class="bottom">
          <h1>${product.name}</h1>
          <div class="price-cart">
            <h3>₹${product.price}</h3>
            <button data-index="${idx}" class="add">
              <i class="ri-add-line"></i>
            </button>
          </div>
        </div>
      </div>`;
  });

  products.innerHTML = clutter;
}

// =======================
// ADD TO CART (UNCHANGED)
// =======================
function addcart() {
  products.addEventListener("click", (dets) => {
    if (dets.target.closest(".add")) {
      const index = dets.target.closest(".add").dataset.index;
      cart.push(arr[index]);
    }
  });
}

// =======================
// CART + TOTAL RENDER (INTEGRATED)
// =======================
function showcart() {
  shopping.addEventListener("click", () => {

    if (flag === 0) {
      shopping.style.color = "#22c55e";
      shopping.style.transform = "scale(1.4)";
      cartexpand.style.display = "flex";
      flag = 1;
    } else {
      shopping.style.color = "#f5f5f5";
      shopping.style.transform = "scale(1)";
      cartexpand.style.display = "none";
      flag = 0;
      return;
    }

    let flutter = "";
    total = 0; // ✅ reset global total

    cart.forEach((elem) => {
      flutter += `
        <div class="cart-item">
          <img src="${elem.img}" />
          <div class="cart-info">
            <p class="title">${elem.name}</p>
            <span class="price">₹${elem.price}</span>
          </div>
          <span class="amount">₹${elem.price}</span>
        </div>
      `;
      total += elem.price; // ✅ ye hi chahiye tha
    });

    cartmid.innerHTML = flutter;
    carttotal.textContent =`Total:₹${total}`;
  });
}




// =======================
// INIT
// =======================
showproduct();
addcart();
showcart();
