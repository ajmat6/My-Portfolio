import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

function Navbar() {
  // useState for changing the className active when clicked on respective of them
  const [activeNav, setactiveNav] = useState('#'); // default state of this hook is home page

  return (
    <nav>
      <a href="#" onClick={() => {setactiveNav('#')}} className={activeNav === '#'? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => {setactiveNav('#about')}} className={activeNav === '#about'? 'active' : ''}><AiOutlineUser /></a>
      <a href="#projects" onClick={() => {setactiveNav('#projects')}} className={activeNav === '#projects'? 'active' : ''}><BiBook /></a>
      <a href="#achievements" onClick={() => {setactiveNav('#achievements')}} className={activeNav === '#achievements'? 'active' : ''}><AiOutlineAreaChart /></a>
      <a href="#contact" onClick={() => {setactiveNav('#contact')}} className={activeNav === '#contact'? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar
