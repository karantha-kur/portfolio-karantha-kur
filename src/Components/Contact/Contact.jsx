import React from 'react'
import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86c38989-16f0-428f-ba36-c4c7004561f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div id='contact' className='Contact'>
      <div className='contact-title'>
        <h1><span class='un'>Get In Touch</span></h1>
        {/* <img src ={theme_pattern} alt=''/> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>I am currently free for work and looking for opportunities that help me grow</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='' /><p>kt.26karanthakur@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='' /><p>+91 9205715603</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='' /><p>New Delhi, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type='email' placeholder='Enter Your Email' name='email' />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="massage" rows='8' placeholder='Enter Your Mesage' />
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact