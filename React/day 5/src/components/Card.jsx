import React from "react";

const Card = (props) => {
  return (
    <div className="bg-amber-50 h-50 w-70 flex justify-center align-center rounded-2xl items-center">
      <h1 className="text-2xl text-indigo-800">
        This is card {props.user.name} and the age is {props.user.age}
      </h1>
    </div>
  );
};

export default Card;
