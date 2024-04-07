import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addVal = () => {
    setCounter(++counter);
    console.log(`Clicked ${counter}`);
  }

  // const decVal =()=>{ 
  //   if(counter==0){}
  //   else{
  //     counter--;
  //   setCounter(counter);
  //   console.log(`Clicked ${counter}`);
  //   }
  // }
  const decVal = () => {
    setCounter(--counter);
    console.log(`Clicked ${counter}`);
  }
  const reset = () => {
    setCounter(0);
    console.log(`Counter reset from ${counter} to 0`);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {counter}</h2>
      <div id="btn">
        <button onClick={addVal}>Add Value</button>
        <br /><br />
        <button onClick={decVal}>Decrease Value</button>
        <br /><br />
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
