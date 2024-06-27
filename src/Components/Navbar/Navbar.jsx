import React, { useState, useEffect, useRef } from "react";
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}><span class='un'>Home</span></p></AnchorLink>{menu === 'home' ? <img src='' alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#aboutme'><p onClick={() => setMenu("aboutme")}><span class='un'>About Me</span></p></AnchorLink>{menu === 'aboutme' ? <img src='' alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}><span class='un'>Portfolio</span></p></AnchorLink>{menu === 'services' ? <img src='' alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}><span class='un'>Contact</span></p></AnchorLink>{menu === 'contact' ? <img src='' alt='' /> : <></>}</li>
      </ul>
      {/* <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div> */}
    </div>
  )
}

export default Navbar