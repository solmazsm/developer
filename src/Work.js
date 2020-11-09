
import React, {Fragment,Component} from 'react';
import logo from './logo.svg';
import pic from './pic.svg';
import styles from './Text.css'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

import {fab,  faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
const Work = () =>{
   
    return (
        <Fragment >
        

        <div className='bg-light text-dark dib br3 pa3 ma2  bw2 shadow-5 d-flex justify-content-end' >
            
        <span class="add-on"><i class="icon-envelope"></i></span>
       

  <Button variant="contained" color="primary">
                  <FontAwesomeIcon icon={faEnvelope}/>
                    
     <span style={{ fontFamily:"'Caveat', cursive", color:"graye", fontSize:"10px"}} > Email: solmazseyedmonir@yahoo.com </span>
                          
                      
             </Button>
             <Button variant="contained" color="primary" href="https://linkedin.com/in/solmaz-seyedmonir/">
                  <FontAwesomeIcon icon={ faLinkedin }/>
                    
     <span style={{ fontFamily:"'Caveat', cursive", color:"graye", fontSize:"10px"}} > Linkedin</span>
                          
                      
             </Button>
             <br />
             <Button variant="contained" color="primary" href="https://github.com/solmazsm">
                  <FontAwesomeIcon icon={ faGithub }/>
                    
     <span style={{ fontFamily:"'Caveat', cursive", color:"graye", fontSize:"10px"}} > Github</span>
                          
                      
             </Button>
    </div>

       </Fragment>

       
    );
}





export default Work;