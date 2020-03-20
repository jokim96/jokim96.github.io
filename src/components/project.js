import React from "react"
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import Page from  './Page.js';
import ProjectCard from  './ProjectCard.js';
import redesign from './images/redesign/redesign-logo.png'
import iterative_design from './images/merlot.jpeg'
import style_transfer from './images/styletransfer/cover.png'
import development from './images/development/cover.png'


const projects = [
  // {image:iterative_design, title:"Simmer Redesigning", link:"/project/simmer" },
  {image:redesign, title:"IMDB Redesigned", link:"/project/redesign"  },
  {image:style_transfer, title:"Style Transfer with Tensorflow", link:"/project/styletransfer"},
  {image:development, title:"Simmer Redesigned", link:"/project/react"}
]

class Project extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  renderList(items) {
    var list = items.map(item => { 
      return <NavLink to={item.link}>
            <ProjectCard image={item.image} link={item.link} title={item.title}/>
         </NavLink>
    });
    return list;
  }


  render() {
    return(
    <Page className="project-page">
      <h1> Projects</h1>
      {/* <Router> */}
      <div className="project-container">
        {this.renderList(projects)}
      </div>
    </Page>
    
    )}
}

export default Project;