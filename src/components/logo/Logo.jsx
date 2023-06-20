import React from 'react'
import './logo.css'
import logo from '../../Assets/logoo.png'

function Logo() {
  return (
    <div className='container logo-container'>
      <img className='logo' src={logo} alt="logo" />
    </div>
  )
}

export default Logo
