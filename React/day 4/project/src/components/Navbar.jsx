import React from "react";

const Navbar = () => {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", padding:"20px", background:"#111", color:"white"}}>
      <h2>Tiwari Industries</h2>
      <div>
        <a href="#">Home</a> | 
        <a href="#">Features</a> | 
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;