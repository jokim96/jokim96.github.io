import React from "react"
import Page from "./Page.js"
import "./App.css"
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
 
function About(props) {
  return (
    <Page className="about-page">
      <div className="about-container"> 
        <h1>Josh Kim</h1>
        <div className="about-link-container">
        <NavLink to="/project" className="about-link"> &lt; Developer</NavLink>
        <NavLink to="/film" className="about-link">  Filmmaker &gt;</NavLink>
        </div>
        <div className="about-me">
          <h2>Visual Learner. Visual Creator.</h2>
          
          <p>I am a junior studying Computer Science and Cognitive Science from South Korea and Singapore and currently studying at Brown University in the US . <br></br>I enjoy anything that lies in the intersection between tech, creativity, and visuality - be it filmmaking, design or coding. Feel free to explore both my filmmaking projects and visual coding projects!</p>
        </div>
      </div>
    </Page>
  )
}
 
export default About;