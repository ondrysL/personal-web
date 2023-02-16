import React, { useEffect, useState } from 'react'
import './AboutMe.css'
import img__about from '../../img/about__img.svg'
import {FaLinkedinIn, FaGitSquare, FaEnvelope} from 'react-icons/fa'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('work')
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
  
  const title__show = {
    visible__title:
      {opacity:1, transition: {duration:1.2}},
    hidden__title:
      {opacity:0},
  }

  const img__show = {
    visible__img: {scale: 1, transition: {duration:1.2, delay:1}},
    hidden__img: {scale:0},
  }
  const text__show = {
    visible__text: {opacity:1, transition: {duration:1.2, delay:2}},
    hidden__text: {opacity:0},
  }
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if(inView){
      control.start("visible__title")
      control.start("visible__img")
      control.start("visible__text")
    }
  }, [inView])

  return (
    <div className='about' id='about'>
      <motion.div
        ref={ref}
        variants={title__show}
        initial='hidden__title'
        animate={control}
        className='about__title'>
        <h1>About <span>me</span></h1>
      </motion.div>
     <div className="test">
      <motion.div
          ref={ref}
          variants={img__show}
          initial='hidden__img'
          animate={control}>
          <img className='about__img' src={img__about}/>
        </motion.div>
          <motion.div
          ref={ref}
          variants={text__show}
          initial='hidden__text'
          animate={control}>
            <h2 className='about__subtitle'>My Introduce</h2>
            <p className="about__text">I am an eighteen-year-old high school student who is constantly striving to move forward. That's why at the age of fifteen, I started learning how to program, and two years later, I started an internship where I helped develop a reservation system for a bus operator.<br></br>
                                        I was mainly involved in backend development, using the Spring Boot framework and PostgreSQL database. During my work, I didn't stop learning new technologies, and that's why my skills now also include knowledge of HTML, CSS, and JavaScript, which I now use when working with React.
            </p>
            <div className="visit__container">
              <a className='visit__button'>
                <FaEnvelope className='mail__icon'></FaEnvelope>
                <p className='visit__url'>linart.ondrej@gmail.com</p>
              </a>
              <a className='visit__button'>
                <FaLinkedinIn className='lin__icon'></FaLinkedinIn>
                <p className="visit__url">LinkedIn</p>
              </a>
              <a className='visit__button'>
                <FaGitSquare className='git2__icon'></FaGitSquare>
                <p className="visit__url">GitHub</p>
              </a>
            </div>
          </motion.div>
          <button className='about__button' onClick={() => handleClickScroll()}>
            <KeyboardArrowDownIcon className='button__arrow__icon'/>
          </button>
     </div>
    </div>
  )
}

export default AboutMe