import React from "react";
import  {useCounter} from "../CustomHook"


const CustomUi =()=>{
    const [count, increment, decrement, reset, setValue] = useCounter()

    return(
        <div className="App">
            <header>Custom Hook Counter App</header>
            <h1>{count}</h1>
            <div className="text-btn">

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={setValue}>Set Value</button>
            </div>
        </div>
    );
}
export default CustomUi;