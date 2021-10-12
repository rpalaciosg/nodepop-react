import React, { useState } from 'react'
import Anuncios from './components/Users/User'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
      <Anuncios/>
      </header>
    </div>
  )
}

export default App
