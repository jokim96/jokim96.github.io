import React from "react"
import FilmCard from './FilmCard.js'
import './App.css';
import Page from './Page';
import EnOtroParaiso from './EnOtroParaiso.js';

import art from './images/art.png'
import eop from './images/eop.png'
import rem from './images/rem.png'
import luk from './images/luk.jpeg'
import merlot from './images/merlot.jpeg'
import nyc from './images/nyc.png'
import vice from './images/vice.png'
import cnn from './images/cnn.png'
import Vimeo from '@u-wave/react-vimeo';
 
const films = [
    {image:merlot, title:"Merlot Doesn't Go with Seabass", category:"Narrative Short" , src:"https://vimeo.com/383961719/f4933d0ac3", description: "Written/Directed by Josh Jun Kim & Michael Mireles /n DP/Edit by Josh Jun Kim", portfolio:false},
    {image:luk, title:"Strawberry Generation", category:"Music Video" , src:"https://vimeo.com/387776966/591b2f6c66", description:"Directed by Josh Jun Kim", portfolio:false},
    {image:art, title:"Drowning", category:"Experimental", src:"https://vimeo.com/389638949/4416d1e0fe",description:"", portfolio:false},
    {image:eop, title:"En Otro Paraiso", category:"Narrative Short", src:"https://vimeo.com/380157225", description:"", portfolio:true},
    { image:rem, title:"REM", category:"Narrative Short", src:"https://vimeo.com/331576114",description:"Directed by Carter Graves /n DP by Josh Jun Kim", portfolio:false},
    { image:nyc, title:"From Brooklyn to Queens", category:"Experimental", src:"https://vimeo.com/385348185", description:"", portfolio:false},
    {image:vice, title:"Vice // The Artist", category:"Branded Content", src:"https://vimeo.com/360725411", description:"Production: electriclimefilms /n Cam Op: Josh Jun Kim", portfolio:false},
    { image:cnn, title:"CNN // Explore the Extraordinary", category:"Branded Content", src:"https://vimeo.com/361223832",description:"Production: electriclimefilms /n Edit by Josh Jun Kim", portfolio:false} ,
]

function FilmDisplayer(props) {
  if (!props.show) {
    return null;
  }
  if (props.portfolio && props.title === "En Otro Paraiso") {
    return (
      <EnOtroParaiso />
    )
  } else if (props.portfolio) {
    return (
      <div >
        Coming soon...
      </div>
    )
  }
  return (
    <div className="film-displayer">
       
      <div className="film-displayer-video-container">
          <Vimeo className="film-displayer-vimeo"
            video={props.src} 
            autoplay
            volume={100}
            responsive
            showTitle="false"
            showPortrait="false"
            showByline="false"
            // controls='false'
            width={500}
          />
        
      </div>
      <div className="film-displayer-text">  
        <h2> {props.title}</h2>
        <h3> {props.category}</h3>
        
        <p>{(props.description).split('/n').map(line => <p>{line}</p>)}</p>
        
      </div>
    </div>
  )
}


// function Film(props) {
class Film extends React.Component {

  
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this)
    this.state = {
      showFilm: false,
      intervalId:0,
      src: '',
      category: '',
      title: '',
      description: '',
      portfolio:false
    }

  }

  
  renderList(items) {
    var list = items.map(item => { 
      return <FilmCard  handler={this.selectItem} link={item.link} image = {item.image} title={item.title} category={item.category} src={item.src} description={item.description} portfolio={item.portfolio}/>
    });
    return list;
  }

  selectItem(item) {
    this.setState({
      showFilm: true,
      src: item.src,
      title: item.title,
      category: item.category,
      description: item.description,
      portfolio:item.portfolio
    })
    this.scrollToTop()

  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId: intervalId });
  }

  render() { return(
    <Page className="film-page">
      <FilmDisplayer show={this.state.showFilm} src={this.state.src} title={this.state.title} category={this.state.category} portfolio={this.state.portfolio} description={this.state.description}/>
          <h1>Films</h1>
        <div className="film-container">
        {this.renderList(films)}
      </div>
    </Page>
  )}
}


export default Film;