import React from 'react'
import './Skills.css'
import SkillImage from '../../assets/skills.png'
import {LinearProgress} from '@mui/material'

const Skills = () => {
  return (
    <>
        {/* skills */}
            <div className='skill-title'>
                <h2>//this is my skills</h2>
            </div>
        <div className='skill-container'>
            <div className='skill-image'>
                <img src={SkillImage} alt="" />
            </div>
            <div className='skill-range'>
                <SkillRange />
                
            </div>
        </div>
    </>
  )
}

export default Skills


// skills range 
function SkillRange() {
    return<>
        <div className='range-container'>
            <div className='skill-name'>React redux and ReactNavigater</div>
            <div className='skill-persentage'>
                <LinearProgress variant='determinate' value={50} color='primary' />
            </div>
        </div>
        <div className='range-container'>
            <div className='skill-name'>Node js </div>
            <div className='skill-persentage'>
                <LinearProgress variant='determinate' value={30} color='primary' />
            </div>
        </div>
        <div className='range-container'>
            <div className='skill-name'>React Native</div>
            <div className='skill-persentage'>
                <LinearProgress variant='determinate' value={50} color='primary' />
            </div>
        </div>
        <div className='range-container'>
            <div className='skill-name'>HTML CSS and JS</div>
            <div className='skill-persentage'>
                <LinearProgress variant='determinate' value={70} color='primary' />
            </div>
        </div>
        <div className='range-container'>
            <div className='skill-name'>Figma UI/UX</div>
            <div className='skill-persentage'>
                <LinearProgress variant='determinate' value={70} color='primary' />
            </div>
        </div>
        <div className='range-container'>
            <div className='skill-name'>System Maintanance and Service </div>
            <div className='skill-persentage'>
                <LinearProgress variant='determinate' value={85} color='primary' />
            </div>
        </div>
    </>
}