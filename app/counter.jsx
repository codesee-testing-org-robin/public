import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      Counter: <span data-testid="count">{count}</span>
      <button
        data-testid="increment-button"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        data-testid="reset-button"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};
