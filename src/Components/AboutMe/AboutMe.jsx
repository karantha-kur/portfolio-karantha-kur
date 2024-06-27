import React from 'react'
import './AboutMe.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/IMG_4639.png'
const AboutMe = () => {
    return (
        <div id='aboutme' className='aboutme'>
            <div className='aboutme-title'>
                <h1><span class='un'>About me</span></h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="aboutme-section">
                <div className="aboutme-left">
                    <img src={profile_img} width={340} height={450} alt="" />
                </div>
                <div className="aboutme-right">
                    <div className="aboutme-para">
                        <p>Hello there, I'm Karan Thakur, a fresher having a Bachelors degree from IIT Jodhpur,
                            with a sharp interest in Data Science & Analytics, Quantative Finance, Puzzles, Writing Blogs and Formula 1.</p>
                        <p>What began in front of a PC in Delhi and is at the present time, cruising everywhere on the web.
                            Please feel free to look at my work and let me know what you think.
                        </p>
                    </div>
                    <div className="aboutme-skills">

                        <div className="aboutme-skills">
                            <div className="aboutme-skill"><p>SQL</p><hr style={{ width: "75%" }} /></div>
                            <div className="aboutme-skill"><p>Data Analysis</p><hr style={{ width: "60%" }} /></div>
                            <div className="aboutme-skill"><p>DSA</p><hr style={{ width: "45%" }} /></div>
                            <div className="aboutme-skill"><p>Development</p><hr style={{ width: "35%" }} /></div>
                            <div className="aboutme-skill"><p>Statistics</p><hr style={{ width: "70%" }} /></div>
                            <div className="aboutme-skill"><p>AI/ML</p><hr style={{ width: "60%" }} /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="aboutme-acheivements">
                <div className="aboutme-acheivement">
                    <h1>10+</h1>
                    <p>IITJ</p>
                </div>
                <hr />
                <div className="aboutme-acheivement">
                    <h1>Projects</h1>
                    <p>IITJ</p>
                </div>
                <hr />
                <div className="aboutme-acheivement">
                    <h1>Books</h1>
                    <p>IITJ</p>
                </div>
            </div> */}
        </div>
    )
}

export default AboutMe