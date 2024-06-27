import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-top'>
      <h1><span class='un'>Connect With Me</span></h1>
      <div className="icons">
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <a href="https://www.linkedin.com/in/karan-thakur-profile/">
          <i class="fa fa-linkedin-square" id="linkdin"></i></a>
        <a href='https://github.com/karantha-kur'>
          <i class="fa fa-github" id="github"></i></a>
        <a href="https://www.instagram.com/karan.__thakur_/">
          <i class='fa fa-instagram' id='instagram'></i></a>
        <a href="https://medium.com/@kt.26karanthakur">
          <i class='fa fa-medium' id='medium'></i></a>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-text'>© 2024 Karan Thakur. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer