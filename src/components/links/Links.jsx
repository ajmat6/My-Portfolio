import React from 'react'
import './link.css'
import leetcode from '../../Assets/LeetCode.png'
import gfg from '../../Assets/gfg.jfif'
import github from '../../Assets/github.png'
import Linkedin from '../../Assets/linkedin.png'
import cf from '../../Assets/codeforces.webp'
import cc from '../../Assets/codchef.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

const data = [
    {
        photo: Linkedin,
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/ajmat-kathat-0a5b45252'
    },
    {
        photo: github,
        name: 'Github',
        link: 'https://github.com/ajmat6'
    },
    {
        photo: leetcode,
        name: 'Leetcode',
        link: 'https://leetcode.com/u/_a6'
    },
    // {
    //     photo: cf,
    //     name: 'Codeforces',
    //     link: 'https://codeforces.com/profile/ajmat6'
    // },
    {
        photo: cc,
        name: 'Codechef',
        link: 'https://www.codechef.com/users/ajmat28'
    }
]

function Links() {
  return (
    <section id="links">
        <h5>Look At My Profiles</h5>
        <h2>Links</h2>

        {/* Swiper js -> First install it by npm i swiper and then look for the documentation */}
        <Swiper className="container links-container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}    >
            {
                data.map(({photo, name, link}, index) => {
                    return (
                        <SwiperSlide key={index} className="links">
                            <div className="link-photo">
                                <a href={link} target="_blank"><img src={photo} alt={name} /></a>
                            </div>
                            <h5 className='link-name'>{name}</h5>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Links
