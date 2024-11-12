import React from "react";
import { myCounerStore } from "../store/CounterStore";

const CounterShow = () => {
  const { count } = myCounerStore();
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default CounterShow;
