import React from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <p className='navbar__logo'>Lin<span className='logo__span'>art.</span></p>
        <div className="navbar__menu">
        </div>
    </nav>
  )
}

export default Navbar