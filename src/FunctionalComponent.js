import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function FunctionalComponent(){
    const {counter,setCounter}=useContext(CounterContext)
    return (
        <div style={{border:'2px solid black',width:'450px',margin:'auto'}}>
            <h1>Functional Component</h1>
            <h2>{counter}</h2>
            {/* <h2>{counter}</h2> */}
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>

            <FChild  />
        </div>)
}

function FChild(){
    const {counter,setCounter}=useContext(CounterContext)

    return (
        <div style={{border:'2px solid black',width:'400px',margin:'auto'}}>
            <h1>Functional Child Component</h1>
            {/* <h2>{counter}</h2> */}
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>


        </div>)
}

export default FunctionalComponent;