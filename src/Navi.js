import React from 'react';
import ReactBootstrap,{  NavItem, NavDropdown, MenuItem, Nav, Form, Button, FormControl } from 'react-bootstrap';
import styles from './navi.css'
import Navbar from 'react-bootstrap/Navbar'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import About from './About'
import {fab,  faLinkedin, faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class Navi extends React.Component {
    render(){
        return(
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Navbar.Brand href="#home">
            <span style={{fontFamily:"'Lobster', cursive", fontSize:"25px", margin:"20px"}}>Solmaz Seyed Monir</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features"> <span style={{fontFamily:"'Lobster', cursive", fontSize:"20px"}}>Work</span></Nav.Link>
              <Nav.Link href="./about"><span style={{fontFamily:"'Lobster', cursive", fontSize:"20px"}}>About</span></Nav.Link>
              <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item href="http://535fall2018solmazmonir.blogspot.com/" className="drop">Data Center</NavDropdown.Item>
                <NavDropdown.Item href="https://htmlsolmazseyedmonirsep2020.blogspot.com/" className="drop">Website 1</NavDropdown.Item>
                <NavDropdown.Item href="https://htmlsolmazseyedmonirsep2020.blogspot.com/" className="drop">Website 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://htmlsolmazseyedmonirsep2020.blogspot.com/" className="drop">Website 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="resume.pdf" className="drop">Resume</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <Button variant="contained" color="primary" href="https://www.youtube.com/channel/UCDl6AuRGel1pU4MxvnLL2uw">
              <span style={{ fontSize:"15px", color:"white"}} > <FontAwesomeIcon icon={ faYoutube }/>
                    </span>]
     <span style={{fontFamily:"'Lobster', cursive", fontSize:"20px", color:"white"}} > YouTube</span>
                          
                      
             </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <br /><br />
        </Navbar>

        
    )
  }
}

      
export default Navi;