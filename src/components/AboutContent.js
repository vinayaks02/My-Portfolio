import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/web-development.jpg"
import React2 from "../assets/reactjs.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a skilled MERN web developer specializing in crafting immersive digital experiences. With expertise in React, Node.js, Express.js, and MongoDB, I bring ideas to life through clean code and intuitive interfaces. Let's collaborate to turn your concepts into captivating web solutions.</p>
            <Link to ="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2}className="img" alt="true"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent;
