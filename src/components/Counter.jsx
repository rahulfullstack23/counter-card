import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <div className="main">
        <h2>Counter App</h2>
        <h3>Count : {count}</h3>
        {count === 10 && <p className="message">🎉 Maximum Limit Reached</p>}

        {count === 0 && <p className="message">🚫 Minimum Limit Reached</p>}
      </div>
      <div className="container">
        <button onClick={increment} disabled={count === 10}>
          INCREMENT
        </button>
        <button onClick={decrement} disabled={count === 0}>
          DECREMENT
        </button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
