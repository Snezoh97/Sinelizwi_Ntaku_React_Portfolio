import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {


  return (
    <>
      <div>
        <NavBar/>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
