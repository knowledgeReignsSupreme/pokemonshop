import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

class Navbar extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return this.props.match !== nextProps.match
  }

  render() {
  return(
 <div>
    <ul className={classes.NavContainer} >
    <li className={classes.item}><NavLink activeClassName={classes.active} to="/" exact>Shop</NavLink></li>
    <li className={classes.item}><NavLink activeClassName={classes.active} to="/contact" exact>Contact Us</NavLink></li>
    <li className={classes.item}><NavLink activeClassName={classes.active} to="/learn-more" exact>Learn More</NavLink></li>
    </ul>
  </div>
)
}
}
export default Navbar;