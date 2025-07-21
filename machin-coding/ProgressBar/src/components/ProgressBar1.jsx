import { useState, useEffect } from "react";

export function ProgressBar1() {
  const [startTransition, setStartTransition] = useState(false);

  // Start transition after first render and never
  // apply this effect ever again.
  useEffect(() => {
    if (startTransition) {
      return;
    }

    setStartTransition(true);
  });

  return (
    <div className="bar">
      <div
        className={["bar-contents", startTransition && "bar-contents--filled"]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
}
