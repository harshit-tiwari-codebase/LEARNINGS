import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Dynamic from "./Pages/Dynamic";
import Iphone from "./Pages/Iphone";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/Iphone" element={<Iphone />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Dynamic />} />
        <Route
          path="*"
          element={<h1 className="text-center text-6xl text-red-700 mt-10">404 Not Found</h1>}
        />
      </Routes>
    </div>
  );
};

export default App;
