import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    setUser((prev) => [...prev, name]);
    setName("");
  };

  const deleteUser = (index) => {
    setUser((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen w-full bg-[#111] text-white">
      
      {/* Form */}
      <form
        className="flex px-10 py-10 bg-[#222] gap-6 justify-center"
        onSubmit={submitHandle}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-6 py-2 border-2 border-white bg-transparent"
          type="text"
          placeholder="Enter the name"
        />

        <button className="px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition">
          Submit
        </button>
      </form>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
        
        {user.map((elem, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-gray-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h1 className="text-xl font-bold mb-2">{elem}</h1>

            <p className="text-gray-400 text-sm">
              Drone Operator / User
            </p>

            <button
              onClick={() => deleteUser(idx)}
              className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default App;