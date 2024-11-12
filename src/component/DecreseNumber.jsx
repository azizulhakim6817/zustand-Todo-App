import React from "react";
import myCounerStore from "../store/CounterStore";

const DecreseNumber = () => {
  const { decrease } = myCounerStore();
  return (
    <div>
      <button className=" btn btn-warning fw-bold" onClick={decrease}>
        Decrease
      </button>
    </div>
  );
};

export default DecreseNumber;
