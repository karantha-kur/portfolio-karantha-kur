import React from 'react'
import './Hero.css'
import profile_img from '../../assets/cropped_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} width={250} height={250} alt="" />
      <h1>
        <span>Hi, I am Karan Thakur</span>
      </h1>
      <p>
        I am a recent graduate from Indian Institute of Technology Jodhpur, interested in the feild of Data Science and Quantative Finance
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <a href='https://drive.google.com/file/d/1iqcsTOliwpnI3KWKhDiZ-NkJPSdVIWc9/view?usp=sharing'>
          <div className="hero-resume">
            My Resume
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero
