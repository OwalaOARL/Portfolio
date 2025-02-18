import React from 'react';
import './contact.css';
import Linkedin from '../../assets/linkedin.png';



const Contact = () => {
  return (
   <section id="contactPage">
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
      <form className="contactForm">
        <input type="text" className="name" placeholder='Your Name' />
        <input type="email" className="email" placeholder='Your Email' />
        <textarea className="msg" name="meassage" rows="5" placeholder='Your Message'></textarea>
        <button type="submit" value='send' className="submitBtn">Submit</button>
        <div className="links">

        <img src={Linkedin} alt="LinkedIn" className="links" />
        
        </div>
        
      </form>
    </div>
   </section>
  );
}

export default Contact
