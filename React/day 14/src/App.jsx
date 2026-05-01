import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Agencies from "./Pages/Agencies";
import Setting from "./Pages/Setting";
import Support from "./Pages/Support";
import { Link } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  return (
    <div className="h-screen w-full text-[#fff] bg-[#333]">
      <div className="navbar border-2 border-slate-500 w-full px-10 py-6 flex justify-between">
        <h1>NAVBAR</h1>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/Agencies">Agencies</Link>
          <Link to="/Setting">Setting</Link>
          <Link to="/Support">Support Us</Link>
        </div>
      </div>
      <div className="Footer flex w-full absolute bottom-0 px-8 py-6  border-2 border-slate-400 justify-between " >
        <h1>Fotter</h1>
        <button onClick={()=>{navigate("/")}} className="px-6 py-2 border-2 border-slate-500 "  >BACK TO HOME PAGE</button>
      </div>

      <Routes>
        <Route path="/Agencies" element={<Agencies />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
    </div>
  );
};

export default App;
