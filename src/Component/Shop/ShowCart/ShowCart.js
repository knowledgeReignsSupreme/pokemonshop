import React, { useEffect, useState,} from "react";
import classes from './ShowCart.module.css';

const ShowCart = (props) => {
  const [button, setButton] = useState(props.disableButton);

  useEffect(() => {
  },[button]);
  return (
  <div className={classes.cartContainer}>
    <button className={classes.cartContainer__button} disabled={props.disableButton} onClick={props.priceSumHandler}>Show Cart</button>

  </div>
  )
}

export default ShowCart;
