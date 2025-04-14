import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <nav>
        <TopSpot />
        <Nav />
      </nav>
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
