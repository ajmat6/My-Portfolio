import React from 'react'
import './project.css'
import {FaGithub} from 'react-icons/fa'
import Notes from '../../Assets/Notes.jpg'
import text from '../../Assets/text.png'
import weather from '../../Assets/weather.jfif'
import news from '../../Assets/news.jpg'

// for major projects
const data1 = [
  {
    id:1,
    image: Notes,
    title: 'AksBook',
    github: 'https://github.com/ajmat6/AKsBook-MERN',
    description: "Introducing AKsBook that offers each user a personalized account, empowering them to effortlessly add, update, and delete their own notes. Ensuring utmost security, AKsBook guarantees that users can't access each other's notes. Leveraging the power of React, Node, Express, Bootstrap, JSON Web Tokens, and Postman, AKsBook sets a new standard for seamless and protected note management. "
  },
  {
    id:2,
    image: news,
    title: 'Newsmat',
    github: 'https://github.com/ajmat6/React-Newsmat',
    description: "Newsmat is a dynamic news website featuring separate sections for science, health, technology, education, Bollywood, and more. Powered by React, Node, Express, Bootstrap and equipped with infinite loading spinner and News API, it offers an immersive and seamless news browsing experience that keeps you updated not only about what is happening in all over India but the incidents from all over the world."
   }
  // {
  //   id:3,
  //   image: Notes,
  //   title: 'Weather App',
  //   github: 'https://github.com/ajmat6',
  //   description: 'This is the description of the project'
  // }
]

// for minor projects
const data2 = [
  // {
  //   id:4,
  //   image: Notes,
  //   title: 'Plotting Corona Cases',
  //   github: 'https://github.com/ajmat6',
  //   description: 'This is the description of the project'
  // },
  {
    id:5,
    image: weather,
    title: 'Weather App',
    github: 'https://github.com/ajmat6/Express-Weather-App',
    description: 'Created a Minor Project of Weather App using Weather API that shows current weather of known places from all over the world. Created with the help of Node.js, Express.js, Handlebars, Bootstrap and Weather API.'
  },
  {
    id:6,
    image: text,
    title: 'TextAnalyzer',
    github: 'https://github.com/ajmat6/TextAnalyzer',
    description: 'TextAnalyzer converts text to lowercase, uppercase, copy-to-clipboard functionality, counts words and characters, includes audio feature for text-to-speech, and offers a night mode option.'
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
                  <img className='project-photo' src={image} alt={title} />
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
                    <img className='project-photo' src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={github} className="btn btn-primary" target='_blank'>Github<span><FaGithub className="github"/></span>  </a>
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
