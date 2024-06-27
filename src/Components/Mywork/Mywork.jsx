import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
/* make the my work section separte into data science finance and data analytics*/

const Mywork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1><span class='un'>My latest work</span></h1>
                {/* <img src='' alt=""/> */}
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt='' />
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt='' />
            </div>
        </div>
    )
}

export default Mywork