import Navbar from './components/Navbar'
import './App.css'
import { Router, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/about'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
