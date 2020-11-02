import React, { useEffect } from 'react';
import Aux from '../../../Aux';

const ShopHeader = (props) => {
  useEffect(() => {
  },[]);

  return(
    <Aux>
    {props.eachPokemon.length > 1 && !props.error? (
      <h1 style={{ fontFamily: "Krona One" }} className="shopHeader">Welcome to the Pokemon Shop!</h1>
    ) : props.error ?(
      <h1>Try refershing the page. An error has occured</h1>
    ) : (
      <h1>Loading...</h1>
    )}  
</Aux>  
  )
}

export default ShopHeader;