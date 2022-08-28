import React from 'react'
import Header from './Header'
import Heart from '../assets/heart.png'
import HomeImg from '../assets/home.png'
import Chart from '../assets/chart.png'
import './Home.css'
import { motion } from "framer-motion"
import NumberCounter from 'number-counter';

const Home = () => {
const transition = {type: 'spring', duration: 4 }
const mobile = window.innerWidth <=768 ? true: false;  
return (
    <div className='home' id='home'>
      <div className="blur home-blur"></div>
        <div className='left-h'>
            <Header />
            {/* the best ad */}
            <div className='the-best-ad'>
              <motion.div
               initial={{left: mobile? '240px' : '300px'}}
               whileInView={{left: '8px'}}
               transition={{...transition, type: 'tween'}}
              ></motion.div>
               <span>the best classical dance club in the town</span>
            </div>

            {/* Home Heading */}
            <div className='home-text'>
                <div>
                  <span className='stroke-text'>Shape </span>
                  <span>Your</span>
                </div>
                <div>
                  <span>Ideal Dance</span>
                </div>
                <div>
                  <span>
                  In here we will help you to shape and build your ideal dance and live up your life to fullest
                  </span>
                </div>
            </div>

            {/* figures */}
            <div className='figures'>
              <div>
                <span>
                  <span>+</span>
                  <NumberCounter end={100} start={60} delay={5} prefix="+" />
                </span>
                <span>expert masters</span>
              </div>
              <div>
              <span>
                <span>+</span>
              <NumberCounter end={978} start={800} delay={5} prefix="+" />
              </span>
              <span>members joined</span>
              </div>
              <div>
              <span>
                <span>+</span>
              <NumberCounter end={50} start={20} delay={5} prefix="+" />
              </span>
              <span>dance programs</span>
              </div>
            </div>

            {/* home buttons */}
            <div className='home-buttons'>
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right-h'>
          <button className='btn'><a href='#join' style={{textDecoration:'none', color: 'black' }}>Join Now</a></button>

          <motion.div 
            initial={{ right: '-1rem'}}
            whileInView={{ right: '4rem' }}
            transition={transition}
            className='heart-likes'>
             <img src={Heart} alt='' />
             <span>Overall Likes</span>
             <span>200 +</span>
          </motion.div>

          {/* home images*/}
          <img src={HomeImg} alt='' className='home-image' />
         
          {/* home chart */}
          <motion.div 
            initial={{ right: '37rem'}}
            whileInView={{ right: '28rem'}}
            transition={transition}
            className='chart'>
             <img src={Chart} alt='' />
             <div>
               <span>Grade</span>
               <span>A<sup>+</sup></span>
             </div>
             
          </motion.div>
        </div>
    </div>
  )
}

export default Home