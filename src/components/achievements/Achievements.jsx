import React from 'react'
import './achievements.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {TbBrandMysql} from 'react-icons/tb'
import {SiPug} from 'react-icons/si'
import {DiPython} from 'react-icons/di'
import {FaJava} from 'react-icons/fa'
import {SiSolidity} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {FaLinux } from 'react-icons/fa'
import {BsFillDatabaseFill} from 'react-icons/bs'
import {RiComputerFill} from 'react-icons/ri'


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
              <AiFillHtml5 className="experience-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-d">
              <SiCss3 className="experience-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <DiJavascript className="experience-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <BsFillBootstrapFill className="experience-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <FaReact className="experience-icon"/>
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
              <FaNodeJs className="experience-icon"/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <SiExpress className="experience-icon"/>
              <div>
                <h4>Express.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <SiMongodb className="experience-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <TbBrandMysql className="experience-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <SiPug className="experience-icon"/>
              <div>
                <h4>PUG, Handlebars</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="Programming">
          <h3>Programming</h3>
          <div className="experience-content">
            <article className="experience-d">
              <SiCplusplus className="experience-icon"/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <SiCplusplus className="experience-icon"/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-d">
              <FaJava className="experience-icon"/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <DiPython className="experience-icon"/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-d">
              <DiJavascript className="experience-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
          <div className="leetcode">
            <SiLeetcode className="icon"/>
            <h5>Check Out My Leetcode Profile -> <span><a href="https://leetcode.com/ajmat6" target='_blank'><SiLeetcode className='leet'/></a></span></h5>
          </div>
        </div>

        <div className="others">
          <h3>Others</h3>
          <div className="experience-content">
            <article className="experience-d">
              <BsGit className="experience-icon"/>
              <div>
                <h4>Version Control - Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <FaLinux className="experience-icon"/>
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
              <BsFillDatabaseFill className="experience-icon"/>
              <div>
                <h4>DBMS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-d">
              <RiComputerFill className="experience-icon"/>
              <div>
                <h4>Computer Networks</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
