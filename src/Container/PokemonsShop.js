import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Aux from "../Aux";
import ShopHeader from "../Component/Shop/ShopHeader/ShopHeader";
import PokemonRenderer from "../Component/Shop/PokemonRenderer/PokemonRenderer";
import PageSwitch from "../Component/Shop/PageSwitch/PageSwitch";
import Search from "../Component/Shop/Search/Search";
import ShowCart from "../Component/Shop/ShowCart/ShowCart";
import Numbers from './Numbers';

class PokemonsShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      eachPokemon: [],
      currentPage: 1,
      filter: "",
      totalPrice: 0,
      pokemonsInCart: [],
      enableCart: this.props.location.state !== undefined ? true : false,
    };
    this.inputRef = React.createRef();
  }
  fetchURLs = async () => {
    try {
      const newArr = [];
      Promise.all(
        Numbers.map(num => {
          return new Promise((resolve) =>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            .then(response => {
              return new Promise(() => {
                response.json()
                .then(sf => {
                  newArr.push(sf);
                }).then(arr => {
                  this.setState({ eachPokemon: newArr });
                  resolve()
                })

              })
            })

          })
        })
      )

      //Old fetching (BAD PERFORMANCE!) before improving:
      // for (let i = 1; i < 40; i++) {
      //   console.log()
      //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      //   const data = await response.json();
      //   exArr.push(i);
      // }
      // console.log(exArr)
    } catch (err) {
      this.setState({ error: true });
    }
  };

  componentDidMount = async () => {
    this.fetchURLs();
    if (this.props.location.state !== undefined && this.props.location.state !== null ){
      this.setState({totalPrice: this.props.location.state.totalPrice, pokemonsInCart: this.props.location.state.pokemonsInCart});
    }
  };

  switchPageHandler = (event) => {
    this.setState({ currentPage: +event.target.textContent });
  };

  filterSearch = () => {
    this.setState({ filter: this.inputRef.current.value });
  };

  addItemToCartHandler = (price, name, id, image) => {
    const pokemonPrice = price / 10;
    const oldPrice = { ...this.state }.totalPrice;
    let newPrice = oldPrice + pokemonPrice;
    let fixedPrice = +newPrice.toFixed(2);
    const newCart = [...this.state.pokemonsInCart];
    newCart.push({ name: name, price: pokemonPrice, key: Math.random(), image: image });
    this.setState(
      { pokemonsInCart: newCart, totalPrice: fixedPrice, enableCart: true },
      () => {
      }
    );
  };

  saveToHistory = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <Aux>  
        <ShopHeader
          shouldUpdate={this.state.eachPokemon}
          eachPokemon={this.state.eachPokemon}
          error={this.state.error}
        />
        <Link to={{
          pathname: '/cart',
          state: {pokemonsInCart: this.state.pokemonsInCart, totalPrice: this.state.totalPrice}
        }}>
        <ShowCart
          disableButton={!this.state.enableCart === true}
        ></ShowCart> </Link>
        {this.state.filter === "" ? (
          <PageSwitch
            currentPage={this.state.currentPage}
            switchPageHandler={(e) => this.switchPageHandler(e)}
          />
        ) : null}
        {this.state.eachPokemon.length > 0  ? (
          <Search
            searchInput={this.state.filter}
            aRef={this.inputRef}
            onChange={this.filterSearch}
          />
        ) : null}
        <PokemonRenderer
          currentPage={this.state.currentPage}
          filter={this.state.filter}
          eachPokemon={this.state.eachPokemon}
          addItemToCartHandler={this.addItemToCartHandler}
          />
        {this.state.eachPokemon.length > 1 && this.state.filter === ""  ?(
          <PageSwitch
            currentPage={this.state.currentPage}
            switchPageHandler={(e) => this.switchPageHandler(e)}
          />
        ) : null}
      </Aux>
    );
  }
}
export default PokemonsShop;
