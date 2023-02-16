import React from 'react'
import './Skill.css'
import {FaReact, FaJava, FaHtml5, FaCss3, FaDatabase} from 'react-icons/fa'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Skill = () => {
  return (
    <div className='skills__container'>
        <h1 className='skills__title'>My <span>skills</span></h1>
        <div className="skills">
            <div className="skill">
                <FaJava className='java3 icon3'/>
            </div>
            <div className="skill">
                <FaDatabase className='db3 icon3'/>
            </div>
            <div className="skill">
                <FaReact className='react3 icon3'/>
            </div>
            <div className="skill">
                <FaHtml5 className='html3 icon3'/>
            </div>
            <div className="skill">
                <FaCss3 className='css3 icon3'/>
            </div>
        </div>
    </div>
  )
}

export default Skill