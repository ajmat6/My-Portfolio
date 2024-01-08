import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs' // importing icons from the react-icons library
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>Ajmat Kathat</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#achievements">My Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#links">Social Links</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://linkedin.com/in/ajmat-kathat-0a5b45252" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/ajmat6" target='_blank'><FaGithub /></a>
        <a href="https://leetcode.com/tourist07" target='_blank'><SiLeetcode /></a>
        <a href="https://codeforces.com/profile/ajmat6" target='_blank'><SiCodeforces /></a>
        <a href="https://www.codechef.com/users/ajmat6" target='_blank'><SiCodechef /></a>
      </div>

      <div className="footer-copyright">
        <small> Ajmat Kathat || &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
