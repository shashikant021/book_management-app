import { useEffect, useRef, useState } from "react";

function Demo() {
  ////-------- 1st example of useRef
  let x = 0; //local variable
  const [y, setY] = useState(0); //state variable
  const z = useRef(0); //reference variable

  function handleIncreaseX() {
    x = x + 1;
    console.log("X = ", x);
  }

  function handleIncreaseY() {
    setY(y + 1);
    console.log("Y = ", y);
  }

  function handleIncreaseZ() {
    z.current = z.current + 1;
    console.log("Z = ", z.current);
  }
  ////-------- 1st example of useRef
// ---------------------------------------
  //// ----------- 2nd example of useRef
  const [count, setCount] = useState(0);
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count; // update after render
  }, [count]);
  //// ----------- 2nd example of useRef

  return (
    <>
      {/* ////-------- 1st example of useRef */}
      <h1 className="heading">Reference Object Exmaple----useRef()</h1>
      <div className="demo-container">
        <h1>First Example</h1>
        <h1>X: {x}</h1>
        <button onClick={handleIncreaseX}>Increase x</button>
        <br />
        <h1>Y: {y}</h1>
        <button onClick={handleIncreaseY}>Increase y</button>
        <br />
        <h1>Z: {z.current}</h1>
        <button onClick={handleIncreaseZ}>Increase z</button>
      </div>
      {/* ////-------- 1st example of useRef */}
      {/* ----------------- */}
      {/* //// ----------- 2nd example of useRef */}
      <div>
        <h1>Second Example</h1>
        <p>Current: {count}</p>
        <p>Previous: {prevCount.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      {/* //// ----------- 2nd example of useRef */}
    </>
  );
}

export default Demo;
