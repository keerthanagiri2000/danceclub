import React from 'react'
import './Programs.css'
import {programsData} from '../data/programsData' 

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      {/* header */}
      <div className='programs-header'>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to train you</span>
      </div>

      <div className='program-categories'>
        {programsData.map((program, i)=> (
          <div className='category' key={i}>
            <img src={program.image} alt='' />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'>
              <span>Join Now</span>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs