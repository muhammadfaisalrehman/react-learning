import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]= useState(15)
  //let counter = 15

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    const newcounter = counter - 1
    setCounter(newcounter)
  }

  const magicAddition= () => {
    setCounter((preCounter) => preCounter+1)
    setCounter((preCounter) => preCounter+1)
    setCounter((preCounter) => preCounter+1)
    setCounter((preCounter) => preCounter+1)
  }

  return (
    <>
    <h1>React App (to explain hooks/state ) {counter}</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}>Add Value</button>{"  "}
    <button
    onClick={removeValue}>Remove Value</button>{"  "}
    <button
    onClick={magicAddition}>Magic Addition</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
