import React from "react";
import { useParams } from "react-router-dom";

const Dynamic = () => {
  const { id } = useParams();
  console.log(useParams().id);
  

  // Dummy database
  const products = [
    {
      id: "1",
      name: "iPhone 15",
      price: 79999,
      desc: "Apple smartphone with powerful performance",
    },
    {
      id: "2",
      name: "Samsung S24",
      price: 69999,
      desc: "Flagship Samsung device with great camera",
    },
    {
      id: "3",
      name: "OnePlus 12",
      price: 59999,
      desc: "Fast and smooth experience phone",
    },
  ];

  const product = products.find((item) => item.id === id);

  // ❌ Invalid ID case
  if (!product) {
    return (
      <h1 className="text-center mt-10 text-2xl text-red-500">
        Product Not Found (ID: {id})
      </h1>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">

      <h1 className="text-3xl font-bold mb-4">
        Dynamic Product Page
      </h1>

      <p className="text-gray-500 mb-6">
        You opened product with ID: <span className="font-bold">{id}</span>
      </p>

      <div className="border p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="text-gray-600 mt-2">₹{product.price}</p>
        <p className="mt-3 text-gray-500">{product.desc}</p>

        <button className="mt-5 px-5 py-2 bg-black text-white rounded-lg">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default Dynamic;