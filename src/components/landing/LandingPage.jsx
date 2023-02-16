import React from 'react'
import './LandingPage.css'
import img__land from '../../img/img__land.svg'
import {FaReact, FaJava, FaHtml5, FaCss3, FaDatabase} from 'react-icons/fa'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LandingPage = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('about')
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (  
        <main className='main'>
          <div className="main__upper">
            <h1 className='main__header'>Hi, I am Ondřej Linart</h1>
            <h2 className='main__subtitle'>Full-stack developer</h2>
          </div>
          <div className="main__bottom">
            <img src={img__land} className='main__img'/>
            <div className='main__bottom__icons'>
              <FaReact className='react icon'></FaReact>
              <FaJava className='java icon'></FaJava>
              <FaHtml5 className='html icon'></FaHtml5>
              <FaCss3 className='css icon'></FaCss3>
              <FaDatabase className='db icon'></FaDatabase>
            </div>
             <button className='main__bottom__button' onClick={() => handleClickScroll()}>
                <KeyboardArrowDownIcon className='button__arrow__icon'/>
             </button>
          </div>
        </main>
  )
}

export default LandingPage