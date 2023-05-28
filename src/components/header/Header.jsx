import React from 'react'
import './header.css'
import CTA from "./CTA" // CTA component Import
import Me from "../../Assets/myphoto.jpg"
import Social from './Social'

// This header is for your Name and the typing text
function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5> Hello I'm </h5>
        <h1>Ajmat Kathat</h1>
        {/* <h5 className='text-light'>Fullstack Developer</h5> */}
        <div className="typing-text">
        <div className="static-text"></div>
          <ul className="dynamic-texts">
              <li><span>Programmer</span></li>
              <li><span>MERN-Developer</span></li>
              <li><span>WEB3-Developer</span></li>
              <li><span>Video-Editor</span></li>
          </ul>
        </div>
        <CTA />
        <Social />

        {/* MY Photo */}
        <div className="me">
          <img src={Me} alt="My Photo" className="photo"/>
        </div>

        {/* Scroll Down Feature */}
        <a href="#contact" className='scroll-down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
