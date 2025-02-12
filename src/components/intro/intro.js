import React from 'react'
import './intro.css';
import bg from '../../assets/profile-image.png';
import btnImg from '../../assets/hire.png';
import{Link} from 'react-scroll';

const intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
       <span className="hello">Hello,</span>
       <span className="introText">I'm <span className="introName">Rashini</span> <br/>Full Stack Developer</span><br/>
        <p className="introPara">I’m a passionate Full Stack Developer who specializes in building dynamic, user-friendly web applications with modern technologies.</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire me</button></Link>
    </div>
    <img src={bg} alt="Profile" className="bg"/>
   </section>
  )
}

export default intro;
