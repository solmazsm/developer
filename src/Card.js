import React from 'react';
import logo from './logo.svg';
import pic from './pic.svg';
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import ReactBootstrap,{  NavItem, NavDropdown, MenuItem, Nav, Form, Button, FormControl } from 'react-bootstrap';
import styles from './navi.css'
import Navbar from 'react-bootstrap/Navbar'

const Card = () =>{
   
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 float-right' >
            
           
           <p class="text"> 
             
           <div className='player-wrapper'>
                <ReactPlayer
                className='react-player fixed-bottom'
                url= 'sol.MP4'
                width='100%'
                height='100%'
                controls = {true}
                playing={true}
                />
            </div>
    
    
    </p>
   
           <img  src="" alt="" width="100px" height="100px"  />

       <br />
       { /*
       <p ><i class="fa fa-envelope "> </i> Email: solmazseyedmonir@yahoo.com </p>
            <i class="fa fa-envelope "> </i>
            Email: solmazseyedmonir@yahoo.com  
<br />
<Nav.Link href="https://www.linkedin.com/in/solmaz-seyedmonir/">
       <FontAwesomeIcon icon={["fab", "linkedin"]} className="mr-2" />link
  </Nav.Link>
   */}

   
       </div>
       
    );
}


export default Card;