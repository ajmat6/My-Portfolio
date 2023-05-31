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
              <small>1+ Years</small>
            </article>
            <article className="about-card-content">
              <IoSchoolOutline className="about-icon"/>
              <h5>College CGPA</h5>
              <small>9+ CGPA</small>
            </article>
            <article className="about-card-content">
              <VscFolderLibrary className="about-icon"/>
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptates est fugiat autem velit neque? Aliquam dolorem molestiae alias sunt dignissimos omnis vero saepe voluptatem rem excepturi cupiditate quae repudiandae itaque minima tempora esse earum incidunt voluptates, distinctio voluptate. Ut voluptatibus repudiandae repellat sunt fuga iusto. Alias atque fugiat sequi!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
