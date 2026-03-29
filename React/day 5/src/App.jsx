import React from "react";
import Card from "./components/card";
const App = () => {
  const arr = [
    {name:"harshit",age:"20"},
    {name:"kirtan",age:"19"},
    {name:"sumit",age:"21"}
  ];
  return (
    <div className="bg-black flex flex-col gap-2 px-6 py-6 h-screen">
      {arr.map((elem)=>{
        return <Card user={elem}/>
      })}
    </div>
  );
};

export default App;
