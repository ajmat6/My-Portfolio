import React from 'react'
import {BsLinkedin} from 'react-icons/bs' // importing icons from the react-icons library
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'

// use npm install react-icons for icons like fontawesome
function Social() {
  return (
    <div className='header-socials'>
      <a href="https://linkedin.com/in/ajmat-kathat-0a5b45252" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/ajmat6" target='_blank'><FaGithub /></a>
      <a href="https://leetcode.com/ajmat6" target='_blank'><SiLeetcode /></a>
      <a href="https://instagram.com/_ajmat6" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default Social
