import "./App.css";
import React, { useState, useEffect, useRef } from "react";

const App = () => {
 
  const usePrevious = (value) => {
    const ref = useRef(value);

    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  const addCount = () => {
    setCount(count + previousCount);
  };

  const [count, setCount] = useState(1);
  const previousCount = usePrevious(count); // hold the previous count


  return (
    <div>
      <div>previousCount: {previousCount}</div>
      <div>count: {count}</div>
      <button onClick={addCount}>click me</button>
    </div>
  );
};

export default App;
