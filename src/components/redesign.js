import React from "react"
import './App.css';
import Page from './Page';
import IMDB_Before from './images/redesign/IMDB_now.png'
import WireFrame1 from './images/redesign/wf1.png'
import WireFrame2 from './images/redesign/wf2.png'
import WireFrame3 from './images/redesign/wf3.png'
import WireFrame4 from './images/redesign/wf4.png'
import MainWireframe from './images/redesign/wireframe.png'
import RedesignPage from './images/redesign/redesign-page.png'

function Redesign(props) {
    return (
        <Page className="portfolio" >
            <div className="redesign-page">
            <h1> IMDB Redesign</h1>
            <div className="portfolio-section1" >
                <h2>Context</h2>
                <p>The goal of this project was to take a website that is much in need of a drastic makeover. As a film fanatic, my disappointment with IMDB's cluttered interface urged me to design and implement its visual makeover in Adobe XD, HTML and CSS.</p>
            </div>

            <div className="portfolio-section2" >
                <h2>IMDB</h2>

                <p>IMDb is a database of movie, TV and celebrity content designed to help people explore and be informed about the various options for movies and TV shows. People can read about movie, TV and celebrity news, rate, and share them to their peers.  </p>

                <img className="portfolio-image" src={IMDB_Before}/>
                <p>However, IMDB's current webpage is cluttered with words and information, making it difficult to read or parse through the information. The UI is counter-intuitive to the function of the website. </p>
            </div>

            <div className="portfolio-section3" >
                <h2>Wireframing</h2>

                <p> I propose a new wireframe design to the website. Below are 4 wireframes to the most common screens on IMDB: Main Page, Movie Page, Celebrity Page, New Page</p>
                <h3>Wireframe Mockups</h3>
                <div className="wireframe-container">
                    <img className="wireframe" src={WireFrame1}/>
                    <img className="wireframe" src={WireFrame2}/>
                    <img className="wireframe" src={WireFrame3}/>
                    <img className="wireframe" src={WireFrame4}/>
                </div>
                <h3>Wireframe Connections</h3>
                <img id="wireframeImg" src={MainWireframe}/>

                <h3>Intuitive Design</h3>
                <p>- Distinguished sections - News, Now Showing movies and ratings, Coming Soon, Trailers - all clearly labelled with large headings </p>
                <p>- Consistent navigation layout - horizontal browsing within each section, and vertical browsing between sections</p>
                <p>- News Page laid out like a magazine/newspaper layout for users to browse</p>
                <br></br>
                <h3>Ease of Learning </h3>
                <p>- Consistent and simple navigation layout - left to right browsing - for each subsection - once the user learns how to navigate one section, they know how to navigate every section</p>
                <p>- Consistent button use - each subsection has a “View All” button to lead to page-specific pages, all image-based scrolling and all images are clickable</p>
                <br></br>
                <h3>Efficiency of Use</h3>
                <p>- Consistent navigation layout - left to right browsing - for each subsection</p>
                <p>- Each section has content to browse before having to navigate to a different page</p>
                <p>- Visual browsing through images and posters - greater recognition of content not with just words</p>
                <br></br>
                <h3>Memorability</h3>

                <p>- Consistency and simplicity of layout and buttons allows repeated actions and greater learnability</p>
                <p>- Clearly labelled and distinguished sections lets the users know the architecture of the website</p>
            </div>

            <div className="portfolio-section4" >
                <h2>Visual Redesign</h2>
                
                <img id="redesign" src={RedesignPage}/>
                <div id="redesign">
                <h2>Design Choices </h2>
                
                <h3>Color </h3>
                <p>The color palette was simplified to a black and orange color palette to mirror the IMDb logo. The predominance of the black is also used to create the immersive “cinema” environment for the website and its contents. This makes the information pop out more</p>
                <br></br>
                <h3>Layout and Navigation </h3>
                <p>The grid structure of the design is simple and intuitive. Users can navigate within a section horizontally (carousel) and navigate across different sections vertically. This creates a layout hierarchy that  users can simply follow</p>
                <br></br>
                <h3>Images and Text </h3>
                <p>The use of images with text allows the user to visually browse and recognize movies and TV shows, which is more fitting as they are ultimately visual mediums. The minimal use of text also simplifies the user’s view, which makes it clear of the structure and contents.</p>
                <br></br>
                <h3>Shadows and Occlusion</h3>
                <p>Shadows and occlusion are used to create and illusion that there is hidden overflow within each subsection that the user can browse further by clicking the arrow button. This allows the compacting of contents into a simple and efficient layout</p>
                </div>
            </div>

            {/* <div className="portfolio-section5">
                <h2>Visual Implementation</h2>
            </div> */}
            </div>
        </Page>
    )
  }
  

export default Redesign;