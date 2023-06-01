import React from 'react'
import './project.css'
import {FaGithub} from 'react-icons/fa'
import Notes from '../../Assets/Notes.jpg'

// for major projects
const data1 = [
  {
    id:1,
    image: Notes,
    title: 'AksBook',
    github: 'https://github.com/ajmat6',
    description: 'This is the description of the project'
  },
  {
    id:2,
    image: Notes,
    title: 'Newsmat',
    github: 'https://github.com/ajmat6',
    description: 'This is the description of the project'
  },
  {
    id:3,
    image: Notes,
    title: 'Weather App',
    github: 'https://github.com/ajmat6',
    description: 'This is the description of the project'
  }
]

// for minor projects
const data2 = [
  {
    id:4,
    image: Notes,
    title: 'Plotting Corona Cases',
    github: 'https://github.com/ajmat6',
    description: 'This is the description of the project'
  },
  {
    id:5,
    image: Notes,
    title: 'DanceMania',
    github: 'https://github.com/ajmat6',
    description: 'This is the description of the project'
  },
  {
    id:6,
    image: Notes,
    title: 'TextAnalyzer',
    github: 'https://github.com/ajmat6',
    description: 'This is the description of the project'
  }
]

function Projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Project Portfolio</h2>

      <h3>Major Projects</h3>
      <div className="container project-container">
        {
          data1.map(({id, image, title, github, description}) => {
            return (
              <article key={id} className="project-item">
                <div className="project-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={github} className="btn btn-primary" target='_blank'>Github<span><FaGithub className="github"/></span></a>
                {/* For Future when you will deploy all those websites */}
                {/* <a href="https://github.com/ajmat6" className="btn" target='_blank'>Github<FaGithub /></a> */}
              </article>
            )
          })
        }
      </div>

      <h3>Minor Projects</h3>
      <div className="container project-container">
        {
            data2.map(({id, image, title, github, description}) => {
              return (
                <article key={id} className="project-item">
                  <div className="project-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={github} className="btn btn-primary" target='_blank'>Github<span><FaGithub className="github"/></span></a>
                  {/* <a href="https://github.com/ajmat6" className="btn" target='_blank'>Github<FaGithub /></a> */}
                </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Projects
