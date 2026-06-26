import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <div className="main">
        <h2>Counter App</h2>
        <h3>Count : {count}</h3>
      </div>
      <div className="container">
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
