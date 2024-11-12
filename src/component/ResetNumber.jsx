import React from "react";
import myCounerStore from "../store/CounterStore";

const ResetNumber = () => {
  const { reset } = myCounerStore();
  return (
    <div>
      <button className=" btn btn-danger fw-bold" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ResetNumber;
