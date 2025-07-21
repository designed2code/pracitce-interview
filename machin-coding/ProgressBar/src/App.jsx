import { useState } from "react";
import "./App.css";
import { ProgressBar1 } from "./components/ProgressBar1";
import { HackerNewsJobBoard } from "./components/HackerNewsJobBoard";
function App() {
  const [bars, setBars] = useState(0);
  return (
    <>
      {/* <div className="wrapper">
        <div>
          <button
            onClick={() => {
              setBars(bars + 1);
            }}
          >
            Add
          </button>
        </div>
        <div className="bars">
          {Array(bars)
            .fill(null)
            .map((_, index) => (
              <ProgressBar1 key={index} />
            ))}
        </div>
      </div> */}
      <HackerNewsJobBoard />
    </>
  );
}

export default App;
