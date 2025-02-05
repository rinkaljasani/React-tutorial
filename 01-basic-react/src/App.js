import { useState } from "react";

function App() {
  // let counter = 50 
  const nameV = "React"
  let [counter,setCounter] = useState(5)
  let [name,setName] = useState(nameV)
  
  const addValue = () => {
    counter = counter+1
    setCounter(counter)
    setName(nameV+" "+counter)
  }
  const removeValue = () => {
    if(counter>0){
      setCounter(counter-1)    
    }
    setName(nameV+" "+(counter-1))
  }
  return (
    <>
      <center>
        
        <h1>Hello {name}</h1>
        <h2>Counter value : {counter}</h2>
        <button onClick={addValue}> Add Value</button><br />
        <button onClick={removeValue}> Remove Value</button>
      </center>
    </>
  );
}

export default App;
