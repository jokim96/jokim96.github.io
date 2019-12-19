import React from "react"
import './App.css';
import Page from './Page';


function Development(props) {
    return (
        <Page className="portfolio" >
            <div className="development-page">
            <h1> Development</h1>
            <div className="portfolio-dev-section1" >
                <h2>Context</h2>
                <p>The goal of this project was to take a website that is much in need of a drastic makeover. As a film fanatic, my disappointment with IMDB's urged me closer to designing and implementing its visual makeover in HTML and CSS.</p>
            </div>

            <div className="portfolio-dev-section2" >
                <h2>IMDB</h2>

                <p>IMDb is a database of movie, TV and celebrity content designed to help people explore and be informed about the various options for movies and TV shows. People can read about movie, TV and celebrity news, rate, and share them to their peers.  </p>

                
                <p>However, IMDB's current webpage is cluttered with words and information, making it difficult to read or parse through the information. The UI is counter-intuitive to the function of the website. </p>
            </div>


            </div>
        </Page>
    )
  }
  

export default Development;