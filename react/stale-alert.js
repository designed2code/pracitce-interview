import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // This callback is created anew on every render,
  // but when invoked it will see the `count` value
  // from *the render in which it was defined*.
  function handleAlertClick() {
    setTimeout(() => {
      // 👇 This `count` is fixed to the render snapshot
      alert(`You clicked ${count} times`);
    }, 2000);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={handleAlertClick}>Alert in 2 seconds</button>
    </div>
  );
}
