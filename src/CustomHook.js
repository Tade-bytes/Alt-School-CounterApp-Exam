import { useState } from  "react";

 export const useCounter =(val)=>{
    const [count, setCount] = useState(0);
    const increment = () =>{setCount(count => count + 1)};
    const decrement = () =>{ setCount(count => count - 1)};
    const reset = () => {setCount(0)};
    const setValue =(num) =>{setCount(5)};


    return [count, increment, decrement, reset, setValue];
}
