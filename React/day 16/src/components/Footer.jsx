import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Footer = () => {
  const [theme] = useContext(ThemeDataContext);

  return (
    <footer
      className="h-1/4 w-full flex flex-col justify-between"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#111111",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      
      {/* Top Content */}
      <div className="flex justify-around items-center h-full px-6">
        
        <div>
          <h2 className="text-lg font-bold">My Store</h2>
          <p className="text-sm opacity-70">
            Best products, best prices
          </p>
        </div>

        <div className="text-sm opacity-70">
          <p>Home</p>
          <p>Products</p>
          <p>About</p>
        </div>

        <div className="text-sm opacity-70">
          <p>Email: support@mystore.com</p>
          <p>+91 9876543210</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t text-center text-sm py-2 opacity-70">
        © 2026 My Store | Theme: {theme}
      </div>

    </footer>
  );
};

export default Footer;