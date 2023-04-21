import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <nav className='nav-container'>
        <div className='nav-name'>
            Dhinesh kumar
        </div>
        <div className='nav-center'>
            <div>Skills</div> 
            <div>Projects</div> 
            <div>About Us</div> 
        </div>
        <div className='nav-contact-btn'>
            <button className='nav-Button'>
                Contact
            </button>
        </div>
    </nav>
  )
}

export default Header