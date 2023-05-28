import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'

function Navbar() {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#projects"><BiBook /></a>
      <a href="#achievements"><AiOutlineAreaChart /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar
