import React from 'react'

import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


export default function App() {
    return (
        <>
          <Header/>
            <Home/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
         
        </>
    )
}
