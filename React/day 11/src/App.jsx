import React, { useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
  const [data, setdata] = useState([]);

  const getdata = async () => {
   try{
     const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setdata(response.data);
   }
   catch(error
   ){
    console.log(error.message);
    
   }
  };

  return (
    <div className="min-h-screen w-full bg-[#1f1f1f]">

      {/* Top Section */}
      <div className="border-b border-gray-600 py-10 flex flex-col items-center gap-4">
        <h1 className="text-white text-3xl font-bold">
          User Directory
        </h1>

        <button
          onClick={getdata}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition active:scale-95"
        >
          Fetch Users
        </button>
      </div>

      {/* Cards Section */}
     <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 py-10 px-5">
        {data.map((user,idx) => {
          return <div key={idx} ><Card  user={user} />;</div>
        })}
      </div>
    </div>
  );
};

export default App;