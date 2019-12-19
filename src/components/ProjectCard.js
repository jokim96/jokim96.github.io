import React from 'react'; // Import the Component component from React

import './App.css';
 
class ProjectCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={
        link: props.link,
        image: props.image,
        title: props.title
    }


  }
  render() {
    return(
    <div className="projectcard">
        {console.log(this.state.link)}
        <div className="project-image">
          <img src={(this.state.image)} alt="Project Image"/>
          <div className="project-image-overlay">
            <p>{this.state.title}</p>
            {/* <div className="project-image-overlay-text">
              Text
            </div> */}
          </div>
        </div>
    </div>
    )}
}
 
export default ProjectCard;