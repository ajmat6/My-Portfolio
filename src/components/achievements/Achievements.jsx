import React from 'react'
import './achievements.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

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
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Express.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>PUG, Handlebars</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="Programming">
          <h3>Programming</h3>
          <div className="experience-content">
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Solidity</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
          <div className="leetcode">
            <BsFillPatchCheckFill className="icon"/>
            <h5>Check Out My Leetcode Profile - <span><a href="https://leetcode.com/ajmat6" target='_blank'><SiLeetcode className='leet'/></a></span></h5>
          </div>
        </div>

        <div className="others">
          <h3>Others</h3>
          <div className="experience-content">
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Version Control - Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Operating System - Linux</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>OOPs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>DBMS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillPatchCheckFill className="experience-icon"/>
              <div>
                <h4>Computer Networks</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
