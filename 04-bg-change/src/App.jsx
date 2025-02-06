import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [color, setColor] = useState("gray")
  return (

    <>
      <div className="bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5" style={{ backgroundColor: color }}>
        <h3 className="text-white mt-5 text-base font-medium tracking-tight ">Click Button</h3>
        <p className="text-gray-200 mt-2 text-sm ">
          Please chick button and check my color
        </p>
      </div>

      <div className='mt-4 p-5 bg-white shadow-2xl rounded-2xl'>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg ml-5" style={{ backgroundColor: "#2596be" }} onClick={() => setColor("#2596be")}>Blue
        </button><button className="outline-none px-4 py-1 rounded-full text-white shadow-lg ml-5" style={{ backgroundColor: "#e28743" }} onClick={() => setColor("#e28743")}>Orange</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg ml-5" style={{backgroundColor:"#a283bc"}} onClick={()=>setColor("#a283bc")}>Violate</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg ml-5" style={{backgroundColor:"#fde900"}} onClick={()=> setColor("#fde900")}>Yellow</button>
      </div>
     
    </>

  )
}

export default App
