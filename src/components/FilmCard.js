
import React from 'react'; // Import the Component component from React
import './App.css';
 
class FilmCard extends React.Component {
  
  constructor(props) {
    super(props);


  }
  render() {
    return(
    <div onClick={() => this.props.handler(this.props)} className="filmcard">
      {/* <Link to={props.link}> */}
        <div className="film-image">
          <img src={(this.props.image)} alt="Film Image"/>
          <div className="film-image-overlay">
            <div className="film-image-overlay-text">
            {/* insert info  */}
            </div>
          </div>
        </div>

        {/* <div className="film-title">{props.title}</div>
        <div className="film-category">{props.category}</div> */}
      {/* </Link> */}
    </div>
    )}
}
 
export default FilmCard;