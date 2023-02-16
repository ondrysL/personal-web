import React from 'react'
import { useState } from 'react'
import './Experience.css'
import {FaYoutube, FaLaptop, FaMusic} from 'react-icons/fa'
import img__yt from '../../img/img__yt.svg'
import img__code from '../../img/img__code.svg'
import img__music from '../../img/support__img.svg'
import Work from '../work/Work'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Experience = () => {

    const handleClickScroll = () => {
        const element = document.getElementById('portfolio')
        if(element){
          element.scrollIntoView({behavior: 'smooth'})
        }
      }
    
      const img__show = {
        visible: 
            {x: 0, opacity: 1, transition: {duration:0.8, delay:2}},
        hidden: 
            {x: -200, opacity:0},
      }
      const title__show = {
        visible__title: 
            {opacity: 1, transition: {duration:1.2}},
        hidden__title: 
            {opacity:0},
      }
      const icon__show = {
        visible__icon:
            {scale:1, transition:{duration:1, delay:1.2}},
        hidden__icon:
            {scale:0},
      }
      const control = useAnimation()
      const [ref, inView] = useInView()

      useEffect(() => {
        if(inView){
            control.start("visible__title")
            control.start("visible__icon")
            control.start("visible");
        }
      }, [inView]);

    const [work, setWork] = useState(1)

    const works = [
        {
            title: "Video Editor",
            date: "Januar 2021 - Januar 2022",
            text: "Video editor for small Youtube creators.",
            img: img__yt
        },
        {
            title: "Backend Developer Internship - Bileto, Prague",
            date: "Januar 2021 - Januar 2022",
            text: "Development of the backend for a reservation system for a bus operator. For development, I used the following technologies: Java Spring Boot, PostgreSQL, REST API, Postman, and IntelliJ IDEA.",
            img: img__code
        },
        {
            title: "It support on Colours of Ostrava",
            date: "July 2022",
            text: "Ensuring the functionality of reading devices at entry gates.",
            img: img__music
        }
    ]

  return (
    <div className='work__container' id='work'>
        <motion.div 
            ref={ref}
            variants={title__show}
            initial='hidden__title'
            animate={control}
            className='work__test'>
            <h1 className="work__title">My work <span>experience</span></h1>
        </motion.div>
        <div className="work__icons">
            <motion.div
                ref={ref}
                variants={icon__show}
                initial='hidden__icon'
                animate={control}>
                <FaYoutube className={`yt2__icon ${(work==0)&&`active`}`} onClick={()=>setWork(0)}></FaYoutube>
            </motion.div>
            <motion.div
                variants={icon__show}
                initial='hidden__icon'
                animate={control}>
                <FaLaptop className={`l2__icon ${(work===1)&&`active`}`} onClick={()=>setWork(1)}></FaLaptop>
            </motion.div>
            <motion.div
                variants={icon__show}
                initial='hidden__icon'
                animate={control}>
                <FaMusic className={`m2__icon ${(work===2)&&`active`}`} onClick={()=>setWork(2)}></FaMusic>
            </motion.div>
        </div>
        <motion.div 
            ref={ref}
            variants={img__show}
            initial='hidden'
            animate={control}
            className="works">
            <Work object={works[work]}></Work>    
        </motion.div>
        <button className='about__button' onClick={() => handleClickScroll()}>
            <KeyboardArrowDownIcon className='button__arrow__icon'/>
        </button>
    </div>
  )
}

export default Experience