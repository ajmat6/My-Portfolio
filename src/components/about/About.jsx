import React from 'react'
import './about.css'
import Me from '../../Assets/myphoto.jpg'
import {FaAward} from 'react-icons/fa'
import {IoSchoolOutline} from 'react-icons/io5'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="my-image">
            <img src={Me} alt="Me" />
          </div>
            </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card-content">
              <FaAward className="about-icon"/>
              <h5>Programmer</h5>
              <small>3🌟Leetcode(600+)</small>
            </article>
            <article className="about-card-content">
              <IoSchoolOutline className="about-icon"/>
              <h5>College CGPA</h5>
              <small>9+ CGPA till 4th semester</small>
            </article>
            <article className="about-card-content">
              <VscFolderLibrary className="about-icon"/>
              <h5>Projects</h5>
              <small>15+ Projects (Aggregate)</small>
            </article>
          </div>

          <p>"👋Hii, I'm Ajmat Kathat, a pre-final year IT Student at Arya College of Engineering and IT, skilled in Data structures and algorithms and a full-stack web developer.As said that alone, we can do so little; together, we can do so much, let's collaborate and make our online presence truly shine!"</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>   
        </div>
      </div>
    </section>
  )
}

export default About
