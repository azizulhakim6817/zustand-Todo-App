import React from "react";
import myCounerStore from "../store/CounterStore";


const IncreaseNumber = () => {
  const { increase } = myCounerStore();
  return (
    <div>
      <button className=" btn btn-dark fw-bold" onClick={increase}>
        Increase
      </button>
    </div>
  );
};

export default IncreaseNumber;
