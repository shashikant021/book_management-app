import { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const factorial = useMemo(() => {
    // console.log("Calculating Factorial...");
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }, [number]);

  return (
    <>
      <h1>Learning useMemo Hook</h1>
      <div
        className="memo-container"
        style={
          isDarkTheme
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "white" }
        }
      >
        <p>
          Factorail of {number} is {factorial}
        </p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Enter a number"
        />
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          ThemeChange
        </button>
      </div>
    </>
  );
}
export default Memo;
