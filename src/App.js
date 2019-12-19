import React from 'react';
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Navbar from 'react-bootstrap/Navbar'
import About from './components/about.js'
import Project from './components/project.js'
import Film from './components/film.js'
import StyleTransfer from './components/styletransfer.js'
import Redesign from './components/redesign.js'
import Development from './components/development.js'
import './components/App.css';


function App() {

    return (
      
    <Router basename='/portfolio'>
      <div className="nav">
        {/* <h1 id="name">Josh Jun Kim</h1> */}
        <div className="nav-sub">
          <NavLink to="/project" className="nav-link"> PROJECT</NavLink>
          <NavLink to="/" className="nav-link"> HOME</NavLink>
          <NavLink to="/film" className="nav-link"> FILM</NavLink>
        </div>
      
      </div>
      <Route
        render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup component={null}>
              <CSSTransition timeout={{
                enter: 700,
                exit: 0,
              }} classNames="page" key={pathname}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path="/" component={About} />
                      <Route path="/film" component={Film} />
                      <Route path="/project" exact component={Project} />
                      <Route path="/project/redesign" component={Redesign} />  
                      <Route path="/project/styletransfer" component={StyleTransfer} /> 
                      <Route path="/project/react" component={Development} />  
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          )
        }}


        
      />
    </Router>
    
  );
}


export default App;
