import React from 'react'

export default function Header() {            
  return (
    <header className="flex   justify-center">
    <div className="menu">
      {" "}
      <i className="fa-solid fa-bars " />
    </div>
    <nav className="navbar align-center flex justify-evenly">
      <a href="index.html" className="link a">
        Home
      </a>
     
      <a href="about" className="link a">
        About
      </a>
      <a href="portfolio" className="link a">
        Portfolio
      </a>
      <a href="contact" className="link a">
        Contact
      </a>
    </nav>
  </header>
  
  )
}
