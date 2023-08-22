import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Service'
import Portfolio from './components/Portfolio'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <NavBar />
   <Home />
   <About />
   <Services />
   <Portfolio/> 
  </React.StrictMode>,
)
