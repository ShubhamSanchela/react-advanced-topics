import React, { useState, useEffect } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
      document.title = `You Clicked ${count} times`
      console.log(document.title)
  }, [count])
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        Count : {count} <br/>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)} >Counter</button>
    </div>
  );
}

export default UseEffectCounter;
