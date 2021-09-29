import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Anuncios from './components/Users/User'

function App() {
  const [user, setUser] = useState()

  const UserContext = React.createContext();

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <header className="App-header">
          <Anuncios/>
        </header>
      </div>
    </UserContext.Provider>
  )
}

export default App
