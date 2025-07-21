import { useEffect, useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef();

  function handleAlertClick() {
    setTimeout(() => {
      // 👇 This `count` is fixed to the render snapshot
      alert(`You clicked ${countRef.current} times`);
    }, 2000);
  }

  useEffect(() => {
    countRef.current = count;
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={handleAlertClick}>Alert in 2 seconds</button>
    </div>
  );
}

/*

React treats each render as a snapshot. 
All your state/props values are “frozen” for that render. 
Any functions or effects you set up will permanently reference those frozen values unless you explicitly read from a mutable source (like a ref) or re‑create the function in a later render.

*/
