import React, {Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Card from './Card';
import ReactBootstrap,{ Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import Navi from './Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import Text from './Text'
import Footer from './Footer'
import Work from './Work'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';
  import About from './About'
import { Link, browserHistory, IndexRoute } from 'react-router'

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});
ReactDOM.render(
  
 
  
 

<Router >
     
        
<Switch>
          <Route exact path="/">
            <Navi />
           <Text />
           <Work />
           <Footer />
          </Route>
          <Route path="/about">
            
            <Navi />
            <About />
            <Work />
           <Footer />
          </Route>
         
        </Switch>
        
     
   </Router>,
  document.getElementById('root'),

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
