import { useReducer } from "react";
import { countReducer } from "../reducer";
import "../App.css";

const initialState = { count: 0 };

function CounterApp() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  const handlesetValue = (num) => {
    dispatch({ type: "setValue", payload: 5 });
  };
  return (
    <div className="App">
      <header>useReducer Counter App</header>
      <h1>{state.count}</h1>
      <div className="text-btn">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handlesetValue}>Set Value</button>
      </div>
    </div>
  );
}

export default CounterApp;
