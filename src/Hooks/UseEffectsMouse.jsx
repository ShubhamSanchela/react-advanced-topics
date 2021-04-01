import React, { useState, useEffect } from "react";

function UseEffectsMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
      window.addEventListener("mousemove", logMousePosition)
  },[])

  return (
    <div>
      <h4>Co-ordinate Positioning : X{x}</h4>
      <h4>Co-ordinate Positioning : Y{y}</h4>
      <i className='fa fa-spinner fa-spin' />
    </div>
  );
}

export default UseEffectsMouse;
