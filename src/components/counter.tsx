import { useState } from "react"
import { Button } from "./ui/button";


const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);
    const reset = () => setCount(0);

    if(count < 0) setCount(0);


  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen flex-col space-y-8">
        <div>
           <h1 className="text-6xl">Counter</h1>
        </div>
        <div className="text-3xl">
            {count}
        </div>
        <div className="space-x-2">
           <Button onClick={increment}>+</Button>
           <Button onClick={reset}>Reset</Button>
           <Button onClick={decrement}>-</Button>
        </div>
        
    </div>
  )
}

export default Counter