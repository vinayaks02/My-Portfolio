import "./HeroImgStyles.css"

import React from 'react'
// import {Link} from "react-router-dom"

import bgImg from "../assets/bg1.jpg"

function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={bgImg} alt="bgImg"/>
        </div>
        <div className="content">
            <p>HELLO, I'M </p>
          <div className="name">
            <h1>VINAYAK</h1>
            <p>WEB DEVELOPER</p>
            
          <div> 
        </div>          
      </div>
       
           {/* <div>     
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn-light">CONTACT</Link>
          </div> */}
          <div className="para"><h6>MERN web developer with a creative mindset and a dedication to crafting seamless digital experiences. With a strong foundation in the MERN stack, I bring dynamic and interactive web solutions to life.</h6>
          </div>
        </div>
        
    </div>
  )
}

export default HeroImg
