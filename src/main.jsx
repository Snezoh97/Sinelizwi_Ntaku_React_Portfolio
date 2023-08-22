import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutSection from './components/About'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <NavBar />
   <Home />
   <AboutSection />
  </React.StrictMode>,
)
