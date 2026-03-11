import React from "react";
import Card from "./Card";
import jobs from "./jobs";

const App = () => {
  return (
    <div className="parent w-full min-h-screen bg-[#111] flex flex-wrap justify-center gap-10 p-6 md:px-10">

      {jobs.map((elem) => (
        <Card key={elem.id} props={elem} />
      ))}

    </div>
  );
};

export default App;