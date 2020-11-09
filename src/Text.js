import React, {Fragment,Component} from 'react';
import logo from './logo.svg';
import pic from './pic.svg';
import styles from './Text.css'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom';
const Text = () =>{
   
    return (
        <Fragment>
        
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />  
       <p class="text-right"> 
         
       <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'sol.MP4'
            width='20%'
            height='20%'
            controls = {true}
            playing={true}
            />
        </div>


</p>


<div className='bg-dark dib br3 pa3 ma2  bw2 shadow-5 float-right' >
<p class="d-flex justify-content-around">
<span style={{width:"50%", fontFamily:"'Caveat', cursive", 
 margin:"20px", padding:"5px", marginTop:"10px",color:"beige", 
 fontSize:"20px",display:"inline-block"}}>
     
     <img  src="soli2.PNG" alt="pic" width="100px" height="100px"  />

     <span style={{width:"50%", fontFamily:"'Caveat', cursive", 
 margin:"20px", padding:"5px", marginTop:"10px",color:"beige", 
 fontSize:"20px",}}>
     
     
     Hi, my name is Solmaz. I am a Software Developer who has a passion for coding. 
I completed my second master’s degree in Information Technology at Illinois Institute of Technology with a GPA of 4.0, in Chicago, IL. 
<br /><br />I am a full stack developer based in Seattle, Washington.</span>
</span></p>
<p class="text-center">
   

<div className='bg-light text-dark dib br3 pa3 ma2 grow bw2 shadow-5' >
   
     <a href={"https://solmazsm.github.io/weather/"}> <span  style={{fontFamily:"'Lobster', cursive", 
 margin:"10px", padding:"5px", marginTop:"10px", color:"gray", fontSize:"14px"}}>Weather
 
 

 </span></a>
      <br />
      
      </div>
      <div className='bg-light text-dark dib br3 pa3 ma2 grow bw2 shadow-5' >
   
     <a href={"https://solmazsm.github.io/"}> <span  style={{fontFamily:"'Lobster', cursive", 
 margin:"10px", padding:"5px", marginTop:"10px", color:"gray", fontSize:"14px"}}>Porfolio</span></a>
      <br />
      
      </div>
      <div className='bg-light text-dark dib br3 pa3 ma2 grow bw2 shadow-5' >
   
     <a href={"https://github.com/tranrandy23/SierraRecruitment/tree/solmaz"}> <span  style={{fontFamily:"'Lobster', cursive", 
 margin:"10px", padding:"5px", marginTop:"10px", color:"gray", fontSize:"14px"}}>

 
Project/Website
</span></a>
      <br />
      
      </div>
      <br />
      <div className='bg-light text-dark dib br3 pa3 ma2 grow bw2 shadow-5' >
   
     <a href={"https://solmazsm.github.io/solmazfolio/"}> <span  style={{fontFamily:"'Lobster', cursive", 
 margin:"10px", padding:"5px", marginTop:"10px", color: "gray", fontSize:"14px"}}>Porfolio</span></a>
      <br />
      
      </div>
</p>
       </div>
       <style>{'body { background-color: rgb(52, 58, 64); }'}</style>
       </Fragment>
       
    );
   
}


export default Text;