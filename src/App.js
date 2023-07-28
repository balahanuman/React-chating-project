import React from 'react'
import Navigation from './components/Navigation'
import './App.css'
import ContactHeader from './components/contactHeader/ContactHeader'
import ContactForm from './components/contactForm/ContactForm'
const App = () => {
  return (
    <div>
      <Navigation/>
      
      <ContactHeader/>
      <ContactForm/>
      
    </div>
  )
}

export default App
