import React from 'react'
import './link.css'
import leetcode from '../../Assets/LeetCode.png'
import gfg from '../../Assets/gfg.jfif'
import github from '../../Assets/github.png'
import Linkedin from '../../Assets/linkedin.png'

const data = [
    {
        photo: Linkedin,
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/ajmat-kathat-0a5b45252'
    },
    {
        photo: leetcode,
        name: 'Leetcode',
        link: 'https://leetcode.com/ajmat6'
    },
    {
        photo: github,
        name: 'Github',
        link: 'https://auth.geeksforgeeks.org/user/ajmat1130666'
    },
    {
        photo: gfg,
        name: 'GeeksforGeeks',
        link: 'https://github.com/ajmat6'
    }
]

function Links() {
  return (
    <section id="links">
        <h5>Look At My Profiles</h5>
        <h2>Links</h2>


        <div className="container links-container">
            {
                data.map(({photo, name, link}, index) => {
                    return (
                        <article key={index} className="links">
                            <div className="link-photo">
                                <a href={link} target="_blank"><img src={photo} alt={name} /></a>
                            </div>
                            <h5 className='link-name'>{name}</h5>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Links
