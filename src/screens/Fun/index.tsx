import { useState } from "react";
// import "./index.scss";

export default function Counter() {
  const [name] = useState({
    firstName: "Harry",
    lastName: "Potter",
  });
  const [counter, setCounter] = useState(0);
  const incrementBy3 = () => {
    setCounter(counter + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    name.firstName = "Ginny";
  };
  return (
    <div>
      <h1>{counter}</h1>
      <h2>
        {name.firstName} {name.lastName}
      </h2>
      <button onClick={incrementBy3}>Increment By 3</button>
    </div>
  );
}
