import React from 'react'
import './Plans.css'
import { plansData } from '../data/plansData'
import {TiTick} from 'react-icons/ti'


const Plans = () => {
  return (
    <div className="plans-container" id='plans'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>Ready to start</span>
            <span>Your journey</span>
            <span className='stroke-text'>Now withus</span>
        </div>

        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    <span>{plan.icon}</span>
                    <span>{plan.name}</span>
                    <span>₹ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature" key={i}>
                              <span><TiTick /></span>
                              <span>{feature}</span>
                            </div>
                             
                        ))}
                    </div>
                    <button className='btn'><a href='#join'>Join Now</a></button>
                </div>
            ))}
        </div>
    </div>


  )
}

export default Plans
