import { useReducer, useState } from "react";

import "./App.css";
import { CounterReducer } from "./Reducer/CounterReducer";

const intialState = { count: 0 };

function App() {
  const [state, dispatch] = useReducer(CounterReducer, intialState);

  return (
    <>
      <h2>Reducer Counter</h2>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
    </>
  );
}

export default App;
