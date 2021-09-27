import React from "react"
import {useState} from 'react'
import { useCounter } from "./useCounter"
import ScreenComponent from "./ScreenComponent"


function App() {
  // const [counter,setCounter]=useState(0)
  const [value,increment,decrement,reset]=useCounter(0)
  return (
    <div>
      <h1>Custom Hooks</h1>
      <h2>{value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <ScreenComponent />
    </div>
  )
  
}
export default App;
