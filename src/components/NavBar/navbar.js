import React from 'react'
import './navbar.css';
import{Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';



function Navbar() {
  return (
   <nav className="navbar">
    <img src=""  alt="" />
    <div className="desktopMenu">
      <Link className="desktopMenuListItem">Home</Link>
      <Link className="desktopMenuListItem">About</Link>
      <Link className="desktopMenuListItem">Portfolio</Link>
      <Link className="desktopMenuListItem">Projects</Link>
    </div>

    <button className="desktopMenuBtn">
        <img src="{contactImg}" alt="" className="desktopMenuImg" /> Contact me</button>
    
   </nav>
  )
}

export default Navbar

