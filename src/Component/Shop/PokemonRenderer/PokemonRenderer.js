import React, { useEffect } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import classes from './PokemonRenderer.module.css';

const PokemonRenderer = (props) => {

  useEffect(() => {
},[props.eachPokemon])

return(
<div className={classes.CardsShopContainer}>
{props.currentPage === 1 && props.filter === ""
  ? props.eachPokemon
      .slice(16, 31)
      .map((pokemon) => (
        <Pokemon
          title={pokemon.name}
          key={pokemon.order}
          ability={pokemon.abilities[0].ability.name}
          stat={pokemon.stats[0].base_stat}
          type1={pokemon.types[0].type.name}
          type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
          image={pokemon.sprites.front_default}
          price={pokemon.weight}
          addPokemonToCart={() =>
            props.addItemToCartHandler(
              pokemon.weight,
              pokemon.name,
              pokemon.order,
              pokemon.sprites.front_default

            )
          }
        />
      ))
  : props.currentPage === 2 && props.filter === ""
  ? props.eachPokemon
      .slice(0, 15)
      .map((pokemon) => (
        <Pokemon
          title={pokemon.name}
          key={pokemon.order}
          ability={pokemon.abilities[0].ability.name}
          stat={pokemon.stats[0].base_stat}
          type1={pokemon.types[0].type.name}
          type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
          image={pokemon.sprites.front_default}
          price={pokemon.weight}
          addPokemonToCart={() =>
            props.addItemToCartHandler(
              pokemon.weight,
              pokemon.name,
              pokemon.order,
              pokemon.sprites.front_default
            )
          }
        />
      ))
  : props.currentPage === 3 && props.filter === ""
  ? props.eachPokemon
      .slice(32, 40)
      .map((pokemon) => (
        <Pokemon
          title={pokemon.name}
          key={pokemon.order}
          ability={pokemon.abilities[0].ability.name}
          stat={pokemon.stats[0].base_stat}
          type1={pokemon.types[0].type.name}
          type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
          image={pokemon.sprites.front_default}
          price={pokemon.weight}
          addPokemonToCart={() =>
            props.addItemToCartHandler(
              pokemon.weight,
              pokemon.name,
              pokemon.order,
              pokemon.sprites.front_default

            )
          }
        />
      ))
  : props.filter !== ""
  ? props.eachPokemon
      .filter((pokemon) =>
        pokemon.name
          .toLowerCase()
          .includes(props.filter.toLowerCase())
      )
      .map((pokemon) => (
        <Pokemon
          title={pokemon.name}
          key={pokemon.order}
          ability={pokemon.abilities[0].ability.name}
          stat={pokemon.stats[0].base_stat}
          type1={pokemon.types[0].type.name}
          type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
          image={pokemon.sprites.front_default}
          price={pokemon.weight}
          addPokemonToCart={() =>
            props.addItemToCartHandler(
              pokemon.weight / 10,
              pokemon.name,
              pokemon.order,
              pokemon.sprites.front_default
            )
          }
        />
      ))
  : null}
</div>
  )}

  export default PokemonRenderer;