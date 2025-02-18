import React from 'react'
import './works.css';
import portfolio1 from '../../assets/portfolio-1.jpg';
import portfolio2 from '../../assets/portfolio-2.jpg';
import portfolio3 from '../../assets/portfolio-3.jpg';
import portfolio4 from '../../assets/portfolio-4.jpg';
import portfolio5 from '../../assets/portfolio-5.jpg';
import portfolio6 from '../../assets/portfolio-6.jpg';



const works = () => {
  return (
   <section id='works'>
    <h2 className="workstitle">My Portfolio</h2>
    <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
    <div className="worksImgs">
      <img src={portfolio1}  alt="" className="worksImg" /> 
      <img src={portfolio2}  alt="" className="worksImg" />
      <img src={portfolio3}  alt="" className="worksImg" />
      <img src={portfolio4}  alt="" className="worksImg" />
      <img src={portfolio5}  alt="" className="worksImg" />
      <img src={portfolio6}  alt="" className="worksImg" />
    </div>
    <button className="workBtn">See More</button>
   </section>
  );
}

export default works;
