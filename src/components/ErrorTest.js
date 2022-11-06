import React from 'react';
import { useReducer } from "react";
import { countReducer } from "../reducer";
import "../App.css";

const initialState = { count: 0 };


function ErrorTest() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "incremen" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decremen" });
  };
  const handleReset = () => {
    dispatch({ type: "rese" });
  };
  const handlesetValue = (num) => () => {
    dispatch({ type: "setValu", payload: 5});
  };
  return (
    
      <div className="App">
      <header>Error Boundary Test</header>
      <h1>{state.count}</h1>
      <div className="text-btn">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick= {handlesetValue}>Set Value</button>
      </div>
    </div>
    
    
  )
}

export default ErrorTest;