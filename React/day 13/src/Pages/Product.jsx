import React, { useState } from "react";

const Product = () => {
  const [products] = useState([
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Samsung S24",
      price: 69999,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 59999,
      image: "https://via.placeholder.com/200",
    },
  ]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="mt-3 text-lg font-semibold">
              {product.name}
            </h3>

            <p className="text-gray-600 mt-1">
              ₹{product.price}
            </p>

            <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;