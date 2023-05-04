import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from "swiper/react";

// swiper slider css
import "swiper/swiper-bundle"

const Projects = () => {
  return (
    <>
        <div className='project-container'>
            <div className='project-title'>
                <h1>// my projects</h1>
            </div>
            <div className='project-swiperslider'>
              <div className='swiper-container'>
                <div>
                  <SwiperComponets />
                </div>
              </div>
            </div>
        </div>
    </>
  )
}



// swiper components 
function SwiperComponets() {
  return(
    <h1>Hello</h1>
  )
  
}

export default Projects