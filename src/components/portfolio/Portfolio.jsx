import React from 'react'
import { useState } from 'react'
import './Portfolio.css'
import travel from '../../img/travel__web.png'
import cook from '../../img/cook__web.png'
import {FaReact, FaJava, FaHtml5, FaCss3, FaDatabase, FaSquare, FaGitSquare} from 'react-icons/fa'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import drive__img from '../../img/drive__img.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';

const Portfolio = () => {
  const title__show = {
    visible__title: 
        {opacity: 1, transition: {duration:1.2}},
    hidden__title: 
        {opacity:0},
  }
  const content__show = {
    visible__content:
        {opacity:1, transition:{duration:1, delay:1.2}},
    hidden__content:
        {opacity:0},
  }

  const scrollTop = () => {
    window.scrollTo(0,0)
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if(inView){
        control.start("visible__title")
        control.start("visible__content")
    }
  }, [inView]);

  const [index, setIndex] = useState(0)

  const projects = [
    {
      title: "Travel website",
      img: travel,
      gitUrl: "https://github.com/ondrysL/Travel_agency_websoite"
    },
    {
      title: "Cooking recipe app",
      img: cook,
      gitUrl: "https://github.com/ondrysL/recipe_react_app"
    },
    {
      title: "Driving school web",
      img: drive__img,
      gitUrl: "https://github.com/ondrysL/Car_Website_Template"
    }
  ]

  const indexMinus = () => {
    if(index === 0){
      setIndex(projects.length-1)
    }else{
      setIndex(index-1)
    }
  }

  const indexPlus = () => {
    if(index === projects.length-1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }

  return (
    <div className='portfolio__container' id='portfolio'>
      <motion.div
        ref={ref}
        variants={title__show}
        initial='hidden__title'
        animate={control}
        className='title__container'>
          <h1 className='portfolio__title'>My <span>portoflio</span></h1>
      </motion.div>
          <motion.div 
            ref={ref}
            variants={content__show}
            initial='hidden__content'
            animate={control}
            className="portfolio__project__container">
            <h2 className='portfolio__img__title'>{projects[index].title}</h2>
            <img className='portfolio__img' src={projects[index].img}/>
            <div className="controls">
              <ArrowBackIosIcon onClick={() => indexMinus()} className='arrow__left__icon'></ArrowBackIosIcon>
              <a href={projects[index].gitUrl} rel="noopener noreferrer" target="_blank">
                <FaGitSquare className='git__icon'></FaGitSquare>
              </a>
              <ArrowForwardIosIcon onClick={() => indexPlus()} className='arrow__right__icon'></ArrowForwardIosIcon>
            </div>
          </motion.div>
          <div className='arrow__back' onClick={()=>scrollTop()}>
              <HomeIcon className='arrow__top'></HomeIcon>
              <p>Back</p>
          </div> 
    </div>
  )
}

export default Portfolio