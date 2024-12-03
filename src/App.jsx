import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import NewsDashboard from './components/NewsDashboard'
import Footer from './components/Footer'

function App() {
  const [category, setCategory] = useState('')
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsDashboard category={category} />
      <Footer />
    </>
  )
}

export default App
