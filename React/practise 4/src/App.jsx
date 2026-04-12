import React from "react";
import { useState } from "react";
const App = () => {
  const [data, setdata] = useState([]);
  const [name, setname] = useState(" ");

  const submitHandle = (e, dets) => {
    e.preventDefault();

    const newArr = [...data];
    newArr.push(name);
    console.log(newArr);
    setdata(newArr);

    setname("");
  };
  const deleteHandle = (idx) => {
    setdata((prev) => prev.filter((_, i) => i !== idx));
  };
  return (
    <div className="h-screen w-full bg-[#111]  ">
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
        className="bg-[#333] flex justify-center items-center "
      >
        <div className="flex py-20 flex-col gap-6">
          <input
            value={name}
            onChange={(dets) => {
              setname(dets.target.value);
            }}
            className="text-white px-4 py-2 border-2 border-white rounded-4xl"
            type="text"
            placeholder="Enter name"
          />
          <button className="text-[#fff] font-semibold  px-4 py-2 border-2 border-white bg-green-600 rounded-4xl hover:bg-green-800 transition-all duration-500 ease-in-out">
            Submit
          </button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-6  px-10 py-10 ">
        {data.map((elem, idx) => (
          <div
            key={idx}
            className="card px-10 py-5 flex justify-center items-center rounded-3xl  bg-[#333] border-2 border-[#fff] "
          >
            <div className="gap-5 flex flex-col">
              <h1 className="text-4xl text-[#fff] ">{elem}</h1>
              <button
                onClick={() => {
                  deleteHandle(idx);
                }}
                className="px-1 py-2 bg-red-500 hover:bg-red-700 transition-all duration-500 ease-in-out border-2 border-white text-white rounded-full hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
