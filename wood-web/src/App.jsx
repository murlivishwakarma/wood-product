import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/header/Header'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'

import Home from './pages/mainPages/Home.jsx'
import WhatWeOffer from './pages/what-we-offer/WhatWeOffer'
import WoodWeWorkWith from './pages/wood-we-work-with/WoodWeWorkWith'
import ContactPage from './pages/mainPages/Contact.jsx'
import Question from './pages/Question/Question'
import Gallery from './pages/mainPages/Gallery.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './pages/mainPages/About.jsx'
import Price from './pages/mainPages/Price.jsx'
import NotFoundPage from './pages/404/NotFoundPage.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router >
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/question" element={<Question/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/price" element={<Price/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
