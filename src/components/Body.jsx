import { useState } from "react";

export default function Body() {
const [counter, setCounter] = useState(0);






    return (
        <section className="container1">
            <h2></h2>
            <h2>{counter}</h2>
            <button onClick={()=>{setCounter(counter + 1) } }>+</button>
            <button onClick={()=>{setCounter(counter - 1) } }>-</button>
            <button onClick={()=>{setCounter(0) }}>Reset</button>


        </section>

    );
}
