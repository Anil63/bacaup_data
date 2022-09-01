import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  decrement,
  increament,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";
import { selectCount } from "./counterSlice";

const Count = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;
  return (
    <div>
      <div className="sr">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          {" "}
          -{" "}
        </button>
        <span className="ss"> {count}</span>
        <button
          className="hh"
          aria-label="Increment value"
          onClick={() => dispatch(increament())}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div className="ser">
        <input
          aria-label="set increment amount"
            value={incrementValue}
            onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button
          className="asy"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Count;
