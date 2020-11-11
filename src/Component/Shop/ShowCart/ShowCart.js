import React, { useEffect } from "react";
import classes from './ShowCart.module.css';

const ShowCart = (props) => {

  useEffect(() => {
  },[]);
  return (
  <div className={classes.cartContainer}>
    <button className={classes.cartContainer__button} disabled={props.disableButton} onClick={props.priceSumHandler}>Show Cart</button>

  </div>
  )
}

export default ShowCart;
