import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/header/Header'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import About from './pages/what-we-offer/WhatWeOffer'
import Home from './pages/Home/Home'
import WhatWeOffer from './pages/what-we-offer/WhatWeOffer'
import WoodWeWorkWith from './pages/wood-we-work-with/WoodWeWorkWith'
import Contacts from './pages/Contact/Contacts'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route path="/" element={<WhatWeOffer />} />
        <Route path="/about" element={<About />} />
        <Route path="/wood-we-work-with" element={<WoodWeWorkWith/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
