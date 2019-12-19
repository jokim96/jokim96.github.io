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
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat elit eu fringilla cursus. Maecenas tincidunt elit euismod nibh finibus, quis maximus ante auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam elementum tellus sit amet leo fringilla, non pretium lacus fermentum. Integer ut augue sem. Suspendisse quis felis risus. Phasellus vel purus elementum, ultrices nisi non, ullamcorper urna. Maecenas feugiat, est sit amet lacinia fringilla, ante nisi eleifend lectus, sed ultricies risus ipsum blandit ante. Etiam congue lacus at maximus semper. Vestibulum arcu ipsum, fermentum at mi quis, ullamcorper aliquam mi. In quis elementum magna. Fusce aliquam lacinia tempus.</p>
        </div>
      </div>
    </Page>
  )
}
 
export default About;