import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
function App() {

  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <Highlights/>
      </main>
    </>
  )
}

export default App
