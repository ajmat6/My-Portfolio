import React from 'react'
import './achievements.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Achievements() {
  return (
    <section id='achievements'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">

        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

        <div className="backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>Node.js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>Express.js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill />
              <h4>PUG, Handlebars</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
