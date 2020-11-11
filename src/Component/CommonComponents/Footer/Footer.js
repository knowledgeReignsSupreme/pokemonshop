import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = (props) => {
  useEffect(() => {
  },[props.active]);
  
  return(
 <div className={classes.footerContainer}>
  <h4>The Pokemon Shop</h4>
  <ul className={classes.listContainer}>
    <li ><NavLink activeClassName={classes.active} to="/" exact>Shop</NavLink></li>
    <li ><NavLink activeClassName={classes.active} to="/contact" exact>Contact Us</NavLink></li>
    <li ><NavLink activeClassName={classes.active} to="/learn-more" exact>Learn More</NavLink></li>
  </ul>
  <h4 style={{textAlign: 'center'}}>This site was built by davidOren. All rights reserved <span role="img" aria-label="default">©️</span></h4>
  <div className={classes.iconContainer}>
    <a  href="https://github.com/knowledgeReignsSupreme">
  <p>GitHub:<span><FaGithub className={classes.git}/></span></p> 
  </a>
  </div>
   </div>
  )
}

export default Footer;