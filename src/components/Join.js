import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eifyzup', 'template_a4yjzve', form.current, 'cPnkCTbPaFnTrSCUv')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Join" id='join'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR DANCE</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input type='email' name='email' placeholder='Enter Your Email Address' />
          <button type='submit' className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join