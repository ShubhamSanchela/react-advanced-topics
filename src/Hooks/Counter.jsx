import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();

  useEffect(() => {
      console.log("UseFeect Updating Value")
      document.title = `You Clicked ${count} times`
  }, )

  return (
    <div>
      <h3>Hook Counter count {count}</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter
      </button>
    </div>
  );
}

export default Counter;
