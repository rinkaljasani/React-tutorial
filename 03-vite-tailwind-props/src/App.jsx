import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    title : "first",
    description : "first description",
  }
  return (
    <>
      <h2 className='bg-amber-300 p-5 '> TailWind css, props</h2>
      <Card title="first" description="first component description"/>
      <Card description="secound component description"/>
    </>
  )
}

export default App
