import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">NÓMADE</h1>
      <p>Tu espíritu te lo pide, nosotros te llevamos.</p>
    </div>
  )
}

export default App