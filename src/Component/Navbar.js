import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='container'>
            <div>
                <p>Title</p>
            </div>
            <div>
                <ul className='nav-links'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Blog</li>
                    <li className='nav-item'>Contact</li>
                    <button className='nav-button'>Button</button>
                </ul>
            </div>
        
                
            
        </div>
    </div>
    </>
  )
}

export default Navbar