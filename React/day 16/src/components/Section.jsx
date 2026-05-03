import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Section = () => {
  const [theme] = useContext(ThemeDataContext);

  return (
    <div
      className="w-full h-2/4 border-b-2 border-gray-600 px-6 py-10"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#111111",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        
        <h1 className="text-3xl font-bold mb-4">
          This is Section - {theme}
        </h1>

        <p className="mb-6">
          Welcome to the theme-based section. This updates dynamically.
        </p>

        <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Explore More
        </button>

      </div>
    </div>
  );
};

export default Section;