import React from 'react'
import './Reasons.css'
import IMG1 from '../assets/dance1.jpg'
import IMG2 from '../assets/dance2.jpg'
import IMG3 from '../assets/dance3.jpg'
import IMG4 from '../assets/dance4.jpg'
import tick from '../assets/tick.png'

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className='left-r'>
         <img src={IMG1} alt='' />
         <img src={IMG2} alt='' />
         <img src={IMG3} alt='' />
         <img src={IMG4} alt='' />
      </div>
      <div className='right-r'>
        <span>some reasons</span>

        <div>
          <span className='stroke-text'>why</span>
          <span> choose us?</span>
        </div>
    
        <div className='details-r'>
          <div>
            <img src={tick} alt="" />
            <span>Over 100+ expert masters</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new members</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reasons