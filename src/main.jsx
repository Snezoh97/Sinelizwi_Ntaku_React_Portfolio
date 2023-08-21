import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
  </React.StrictMode>,
)
