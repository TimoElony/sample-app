import { useState } from 'react'
import './App.css'
import TopSpot from './components/TopSpot.jsx'
import Nav from './components/Nav.jsx'
import Dashboard from './components/Dashboard.jsx'
import Outro from './components/Outro.jsx'
import Doormat from './components/Doormat.jsx'

function App() {
  
  return (
    <>
      <header>
        <h1>Hello</h1>
        <TopSpot />
        <nav>
          <Nav />
        </nav>
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <Outro />
        <Doormat /> 
      </footer>
    </>
  )
}

export default App