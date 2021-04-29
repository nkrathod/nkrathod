import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom';
import Navbars from './navbar';
import Profiles from './Components/profile';
import Resumes from './Components/resume';
import Projects from './Components/project';
import Contacts from './Components/contact';
import './App.css';
import Sidebar from './Components/sidebar';

function App() {
  return (
    <div>
        
          
            <Sidebar />
        

          <div className="contain">
          <Router>
            <Navbars />
            <Switch>
              <Route path="/" exact component={Profiles}/>
              <Route path="/resume" component={Resumes}/>
              <Route path="/project" component={Projects}/>
              <Route path="/contact" component={Contacts}/>
                     
            </Switch>
            </Router> 
          </div>
        
        
    </div>
  );
}

export default App;
//<img className="img2 box" src="NKRSOFT.png" alt="nkrsoft" />

// <Route path="/" component={}/>
// <i class="fa fa-unlock" aria-hidden="true"></i> <i class="fa fa-download" aria-hidden="true"></i>

// <button class="button1  arrow">Read more<i class="fa fa-download" aria-hidden="true"></i></button>