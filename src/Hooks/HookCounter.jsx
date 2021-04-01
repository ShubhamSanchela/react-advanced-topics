import React from "react";
import useCounter from "./useCounter";

function HookCounter() {
  const [count, increment, decrement, reset] = useCounter(0,1);
  console.log(count);
  return (
    <div>
      Count : {count}
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default HookCounter;
