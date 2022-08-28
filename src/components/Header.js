import React, { useState } from 'react'
import './Header.css';
import Logo from '../assets/logo.png'
import {GrMenu} from 'react-icons/gr'

const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false; 
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
        <div className='header-logo'>
               <img src={Logo} alt='' />
               <div className='header-name'>
                 <p>THE</p>
                 <p>NATYAM CLUB</p>
               </div>
        </div>
        {(menuOpened === false && mobile === true) ? (
          <div style={{backgroundColor:'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
            onClick={() => setMenuOpened(true)}
          >
            <GrMenu style={{width: '1.5rem', height: '1.5rem'}} />
          </div>
        ) : (
          <ul className='header-menu'>
            <li>
              <a
               onClick={() => setMenuOpened(!menuOpened)}
               className='header-link'
               activeclass='active'
               href='#'
               spy={true}
               smooth={true}
              >Home</a>
             
            </li>
            <li>
              <a
               className='header-link'
               onClick={() => setMenuOpened(!menuOpened)}
               href='#programs'
               spy={true}
               smooth={true}
              >Programs</a>
            </li>
            <li>
              <a
              className='header-link'
              onClick={() => setMenuOpened(!menuOpened)}
              href='#reasons'
              spy={true}
              smooth={true}
              > Why us</a>
            </li>

            <li>
            <a
            className='header-link'
             onClick={() => setMenuOpened(!menuOpened)}
              href='#plans'
              spy={true}
              smooth={true}
              >Plans</a>
            </li>

            <li>
              <a
                className='header-link'
                onClick={() => setMenuOpened(!menuOpened)}
                href='#testimonials'
                spy={true}
                smooth={true}
              >
               Testimonials
              </a>
            </li>
        </ul>
        )}
      </div>
  )
}

export default Header