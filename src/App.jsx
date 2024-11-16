import { useState } from 'react'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import NewsDashboard from './components/NewsDashboard'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <NewsDashboard />
      <Footer />
    </>
  )
}

export default App
