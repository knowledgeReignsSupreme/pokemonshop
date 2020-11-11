import React from 'react';
import classes from './Pokemon.module.css';
import Aux from '../../../Aux';
const pokemon = (props) => (
  <Aux>
  <div className={classes.pokemonContainer}>
    <div className={classes.cardContainer}>
    <h2 className={classes.pokemonContainer__headerMain}><span style={{textTransform: 'capitalize'}}>{props.title}</span></h2>
    </div>
    <h4 className={classes.pokemonContainer__headerSub}>Main Ability: <span style={{textTransform: 'capitalize'}}>{props.ability}</span></h4>
    <ul className={classes.typeList}>Types:</ul>
    <li><span style={{textTransform: 'capitalize'}}><span>{props.type1}</span></span></li>
    {props.type2 ? <li><span style={{textTransform: 'capitalize'}}><span>{props.type2}</span></span></li> : null}
    <p>Base Stat: {props.stat}</p>
    <img src={props.image} alt={pokemon.name}></img>
    <p>Price: ${props.price / 10}</p>
    <button onClick={props.addPokemonToCart} className={classes.pokemonContainer__addToCartButton}>Add to cart</button>
  </div>
  </Aux>
)


export default pokemon;