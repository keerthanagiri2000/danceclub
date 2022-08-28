import React from 'react'
import './Footer.css'
import Logo from '../assets/logo.png'
import {GoMarkGithub} from 'react-icons/go'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className='footer'>
            <div className="social-links">
              <span><GoMarkGithub /></span>
              <span><BsInstagram /></span>
              <span><FaLinkedinIn/></span>
            </div>
        
        <div className='logo-f'>
        <div className='header-logo'>
               <img src={Logo} alt='' />
               <div className='header-name'>
                 <p>THE</p>
                 <p>NATYAM CLUB</p>
               </div>
        </div>
        </div>
        </div>

        <div className='blur blur-f-1'></div>
        <div className='blur blur-f-2'></div>
    </div>
  )
}

export default Footer