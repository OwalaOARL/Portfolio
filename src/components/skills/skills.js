import React from 'react';
import './skills.css';
import UiDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/web-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (     
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I am a passionate web designer and software developer, dedicated to creating visually stunning websites and innovative software solutions that enhance user experiences.
        </span>
        <div className="skillBars">
            <div className="skillBar"> 
               <img src={UiDesign} alt="UI/UX Design" className="skillBarImg" />
               <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>Creating user-friendly and engaging designs for applications and websites.</p>
               </div>
            </div>
            <div className="skillBar"> 
               <img src={WebDesign} alt="Website Design" className="skillBarImg" />
               <div className="skillBarText">
                <h2>Website Design</h2>
                <p>Building modern, responsive, and visually appealing websites.</p>
               </div>
            </div>
            <div className="skillBar"> 
               <img src={AppDesign} alt="App Design" className="skillBarImg" />
               <div className="skillBarText">
                <h2>App Design</h2>
                <p>Designing and developing intuitive mobile and web applications.</p>
               </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
