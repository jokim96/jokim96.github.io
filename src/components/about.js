import React from "react"
import Page from "./Page.js"
import "./App.css"
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
 
function About(props) {
  return (
    <Page className="about-page">
      <div className="about-container"> 
        <h1>Josh 
        Jun 
        Kim</h1>
        <div className="about-link-container">
        <NavLink to="/project" className="about-link"> &lt; Developer</NavLink>
        <NavLink to="/film" className="about-link">  Filmmaker &gt;</NavLink>
        </div>
        <div className="about-me">
       
          
          <p>Final Year student at Brown University studying Computer Science and Modern Culture and Media. <br></br>I enjoy working in the intersection between tech and visual storytelling. </p>
          <br></br>
          <p>joshua_kim@brown.edu</p>
        </div>
      </div>

      <div className="footer">
        <p>© Joshua Kim 2021</p>
      </div>
    </Page>
  )
}
 
export default About;