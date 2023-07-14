import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className='container'>
      <h1>COUNTER APP</h1>
      <div className="counter">
        <div className="numberDisplay">{count}</div>
        <div className="buttons">
          <button className="increment" onClick={handleIncrement}>Increment</button>
          <button className="decrement" onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default App