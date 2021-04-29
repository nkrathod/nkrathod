import React, { Component} from 'react';
import { Button, Navbar, Form, Nav } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './App.css';

export default class Navbars extends Component{
    render(){
        return(
            <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            
                <Navbar.Brand><Link to="/">Portfolio</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navmenu ml-auto">
                    <Nav.Item className="clock">{new Date().toLocaleTimeString()}</Nav.Item>
                    
                    <Nav.Item><Link to="/">Profile</Link></Nav.Item>
                    <Nav.Item><Link to="/resume">Resume</Link></Nav.Item>
                    <Nav.Item><Link to="/project">Project</Link></Nav.Item>
                    <Nav.Item><Link to="/contact">Contact</Link></Nav.Item>
                </Nav>
              

            </Navbar.Collapse>
          </Navbar>
          </div>
        )
    }
}

//                 <Button variant="outline-success">Login</Button>
              