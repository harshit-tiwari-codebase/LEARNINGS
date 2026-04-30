import React from "react";

const Home = () => {
  const products = [
    { id: 1, name: "iPhone 15", price: 79999 },
    { id: 2, name: "Samsung S24", price: 69999 },
    { id: 3, name: "OnePlus 12", price: 59999 },
  ];

  return (
    <div className="p-5">
   
      {/* Hero Section */}
      <div className="bg-gray-900 text-white p-12 text-center rounded-xl">
        <h1 className="text-3xl font-bold">Welcome to My Store</h1>
        <p className="mt-2 text-gray-300">
          Best Deals on Smartphones
        </p>
        <button className="mt-4 px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      {/* Featured Products */}
      <h2 className="mt-8 text-2xl font-semibold">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-xl text-center shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-gray-600 mt-1">₹{item.price}</p>
            <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              View Details
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;