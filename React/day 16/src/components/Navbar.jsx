import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div
      className="w-full h-1/4 border-b-2 shadow-md px-6 py-4 flex justify-between items-center"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#111111",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <h1 className="text-xl font-bold">Navbar</h1>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;