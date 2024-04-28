//hook
// re-render


import { useState } from "react";

const Counter = () => {

  const [counter , setCounter] = useState(0);
  const [isShow , setIsshow ] = useState(true);

  const increadeHandler = () =>{
    setCounter ((counter) +  1);
  }
  
  const increadeHandler3 = () =>{
    setCounter( (counter) => counter +1);
    setCounter( (counter) => counter +1);
    setCounter( (counter) => counter +1);
  }

  const stopHandler = () =>{
    setCounter("-")
  }

  const showHandler = () => setIsshow (true);
  const hideHandler  = () => setIsshow(false);

  return (
    <>
     <button onClick={showHandler}>show</button>
     <button onClick={hideHandler}> Hide</button>
    {
      isShow && (
        <div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={increadeHandler}>Increase</button>
        <button onClick={increadeHandler3}>Increase3</button>
        <button onClick={stopHandler}>Stop</button>
    </div>
      )}
    </>
  )
}

export default Counter