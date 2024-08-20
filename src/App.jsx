import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import AboutUS from './components/aboutus'
import Contact from './components/contactus'
import Home from "./components/home"
import Footer from './components/footer'
import Services from './components/services'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
      
<Services/>
<AboutUS/>
<Contact/>

<Footer/>
      </div>
        
    </>
  )
}

export default App
