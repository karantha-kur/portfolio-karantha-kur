import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import arrow_icon from '../../assets/arrow_icon.svg'
import Services_Data from '../../assets/services_data'
/* make the my work section separte into data science finance and data analytics*/

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1><span class='un'>My Portfolio</span></h1>
                {/* <img src='' alt=""/> */}
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return <div key={index} className='services-format'>
                        <img src={service.s_img} alt=''></img>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        {/* <div className='services-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt = ''/>
                        </div> */}
                    </div>
                })}

            </div>
            <div className="mywork-showmore">
                <a href="https://github.com/karantha-kur">
                    <p>Show More<img src={arrow_icon} alt='' />
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Services