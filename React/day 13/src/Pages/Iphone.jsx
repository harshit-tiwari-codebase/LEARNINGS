import React from "react";

const Iphone = () => {
  const product = {
    name: "iPhone 15 Pro",
    price: 134999,
    image: "https://via.placeholder.com/400",
    description:
      "The iPhone 15 Pro features a powerful A17 Pro chip, titanium design, and advanced camera system for professional photography.",
    features: [
      "A17 Pro Chip",
      "48MP Camera",
      "Titanium Body",
      "120Hz Display",
    ],
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl text-gray-700 mt-2">
            ₹{product.price}
          </p>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          {/* Features */}
          <ul className="mt-4 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                • {feature}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="px-6 py-2 border rounded-lg hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Iphone;