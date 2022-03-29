import React from 'react'
import './app.css'
import { Navbar } from './components'
import { Experince, Footer, Contact } from './containers'


const App = () => {
  return (
    <>
      <Navbar />
      <Experince />
      <Contact />
      <Footer />
    </>
  )
}

export default App