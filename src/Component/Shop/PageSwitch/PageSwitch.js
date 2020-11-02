import React, { useEffect } from 'react';
import classes from './PageSwitch.module.css';
import Aux from '../../../Aux';

const PageSwitch = (props) => {
  useEffect(() => {
  }, [props.currentPage])
  return(
  <Aux>
      {props.currentPage === 1 ? 
      <div className={classes.PageSwitchContainer}>
      <button className={`${classes.activeButton} ${classes.pageSwitchButton}`} onClick={props.switchPageHandler}>1</button>
      <button className={classes.pageSwitchButton} onClick={props.switchPageHandler}>2</button>
      <button className={classes.pageSwitchButton} onClick={props.switchPageHandler}>3</button> 
        </div> :
     props.currentPage === 2 ?
     <div className={classes.PageSwitchContainer}>
     <button className={classes.pageSwitchButton} onClick={props.switchPageHandler}>1</button>
     <button className={`${classes.activeButton} ${classes.pageSwitchButton}`} onClick={props.switchPageHandler}>2</button>
     <button className={classes.pageSwitchButton} onClick={props.switchPageHandler}>3</button> 
       </div> :
     props.currentPage === 3 ?
     <div className={classes.PageSwitchContainer}>
     <button className={classes.pageSwitchButton} onClick={props.switchPageHandler}>1</button>
     <button className={classes.pageSwitchButton} onClick={props.switchPageHandler}>2</button>
     <button className={`${classes.activeButton} ${classes.pageSwitchButton}`} onClick={props.switchPageHandler}>3</button> 
       </div>
    : null
  }
  </Aux>
  )
}

export default PageSwitch;