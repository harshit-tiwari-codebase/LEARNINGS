import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">
          Tiwari Industries
        </h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24">
        <h2 className="text-5xl font-bold text-gray-800">
          Build Websites with React
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Learn modern web development using React, Tailwind and JavaScript.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Cards Section */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Frontend</h3>
          <p className="text-gray-600">
            Learn HTML, CSS, JavaScript, React and Tailwind CSS.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Backend</h3>
          <p className="text-gray-600">
            Build APIs using Node.js, Express and MongoDB.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-gray-600">
            Create real world MERN stack projects for jobs.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center bg-black text-white p-6">
        <p>© 2026 Tiwari Industries | Made by Harshit</p>
      </footer>

    </div>
  );
}

export default App;