import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
// import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Services/>
        {/* <Mywork/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App