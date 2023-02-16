import './App.css';
import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landing/LandingPage';
import AboutMe from './components/about/AboutMe';
import Experience from './components/experience/Experience';
import Skill from './components/skills/Skill';
import Portfolio from './components/portfolio/Portfolio';
import HomeIcon from '@mui/icons-material/Home';

const App = () => {

  useEffect(() => {
    console.log(window.innerWidth)
  })

  const scrollTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div>
        <div className='landing__page'>
          <div className="nav__anim">
            <Navbar></Navbar>
          </div>
          <LandingPage></LandingPage>
        </div>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Portfolio></Portfolio>
    </div>
  )
}

export default App
