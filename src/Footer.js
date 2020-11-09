import React from 'react';
import logo from './logo.svg';
import pic from './pic.svg';
import styles from './Text.css'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom';
const Footer = () =>{
   
    return (
        <div className='bg-orange dib br3 pa3 ma2  bw2 shadow-5  d-flex justify-content-end' >
           
           
       <p > 
         
       <span  style={{fontFamily:"'Lobster', cursive", 
 margin:"10px", padding:"5px", marginTop:"10px", 
 color:"black", fontSize:"12px"}}>© 2020 Solmaz Seyed Monir

</span>
</p>

       </div>
    );
}


export default Footer;
