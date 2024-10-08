import React from 'react'
import './project.css'
import {FaGithub} from 'react-icons/fa'
import Notes from '../../Assets/Notes.jpg'
import text from '../../Assets/text.png'
import weather from '../../Assets/weather.jfif'
import SortTheAlgo from '../../Assets/sortalgos.png'
import oac from '../../Assets/Oldaryaconnect.png'
import ecomm from '../../Assets/eccomerce.jpg'

// for major projects
const data1 = [
  {
    id:1,
    image: oac,
    title: 'OldAryaConnect',
    github: 'https://github.com/ajmat6/OAC',
    Live: 'https://oldaryaconnect.in/',
    description: "Developed a versatile MERN stack-based platform facilitating access to a wide range of notes catering to university exams, Data Structures and Algorithms (DSA), and various tech stacks.Ensured scalability by structuring the system to accommodate diverse types of study notes, optimizing user experience and knowledge acquisition.Also includes Lost and Found feature enabling users to report lost or found items, fostering a community-driven environment.Implemented a secure and confidential communication system where responders can interact with the item poster while maintaining privacy.Developed a mechanism for item posters to evaluate responses, granting access to claimer's contact details upon acceptance, thereby facilitating safe item retrieval."
  },
  {
    id:2,
    image: ecomm,
    title: 'Ecommerce Platform',
    github: 'https://github.com/ajmat6/Ecommerce-Platform',
    description: "Developed an e-commerce website using the MERN stack, ensuring full responsiveness. Features include a user-friendly interface,  personalized user profiles, order tracking, and seamless integration with social media platforms. Building a robust platform that delivers an exceptional online shopping experience, maximizing convenience and customer satisfaction."
   },
  {
    id:3,
    image: Notes,
    title: 'AKsBook',
    github: 'https://github.com/ajmat6/AKsBook-MERN',
    description: "Introducing AKsBook that offers each user a personalized account, empowering them to effortlessly add, update, and delete their own notes. Ensuring utmost security, AKsBook guarantees that users can't access each other's notes. Leveraging the power of React, Node, Express, Bootstrap, JSON Web Tokens, and Postman, AKsBook sets a new standard for seamless and protected note management. "
  },
  {
    id:4,
    image: SortTheAlgo,
    title: 'SortTheAlgo',
    github: 'https://github.com/ajmat6/SortTheAlgos',
    Live: 'https://sort-the-algos.vercel.app/',
    description: "SortTheAlgo project visualizes various sorting algorithms using React, providing an interactive visual experience to understand sorting algoritms visually. It dynamically illustrates algorithms like Quick Sort, Merge Sort, Insertion Sort, Selection Sort and Bubble Sort, enhancing comprehension of data structures and algorithms through visual representation and making it easier to understand."
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
          data1.map((item) => {
            return (
              <article key={item.id} className="project-item">
                <div className="project-item-image">
                  <img className='project-photo' src={item.image} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.github} className="btn btn-primary" target='_blank'>Github<span><FaGithub className="github"/></span></a>
                {item.Live && <a href={item.Live} className="btn" target='_blank' style={{marginLeft: '10px'}}>Live</a>}
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
