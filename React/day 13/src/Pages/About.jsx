import React from "react";

const About = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        About Us
      </h1>

      {/* Intro Section */}
      <p className="text-gray-600 text-center mb-10">
        Welcome to our store. We provide high-quality smartphones at the best prices.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="p-5 border rounded-xl shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To deliver the best products with quality and affordability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-5 border rounded-xl shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become a trusted online store for tech products.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-5 border rounded-xl shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
          <p className="text-gray-600">
            Best prices, fast delivery, and reliable service.
          </p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="mt-10 text-center text-gray-500">
        © 2026 My Store. All rights reserved.
      </div>

    </div>
  );
};

export default About;