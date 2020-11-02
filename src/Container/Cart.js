import React, { Component, setState } from 'react';
import Aux from '../Aux';
import { Link } from 'react-router-dom';
import classes from './CartCon.module.css'

let price = 0;  

class CartCon extends Component{
  state={
    
    itemsInCart: this.props.location.state.pokemonsInCart,
    totalPrice: +this.props.location.state.totalPrice,
  }


  removeItemFromCart = (key) => {
    const newItemsInCart = [...this.state.itemsInCart];
    const filteredArray = newItemsInCart.filter(item => {
      return item.key !== key;
    });
    let mapPrice = 0;
    const newPrice = filteredArray.map(pokemon => {
        return filteredArray.length === 0 ? mapPrice =  0 : mapPrice += pokemon.price;
    });
    this.setState({itemsInCart: filteredArray, totalPrice: +mapPrice.toFixed(2)});
  }

  render() {
    return(
      <Aux>
      <div>
        <div className={classes.cart__container}>
        <h3 style={{marginBottom: 10, textAlign: "center"}}>Items In Cart:</h3>
        <ul className={classes.cartItemsUl}>
        {
        this.state.itemsInCart.length > 0 ?  this.state.itemsInCart.map(((pokemon, index) => (
          <li key={pokemon.key}>
            <div className={classes.listItems}>
            <img src={pokemon.image} alt={pokemon.name}></img>
            <span style={{textTransform: 'capitalize'}}><strong>Name:</strong> {pokemon.name}</span>
            <p><strong>Price:</strong> ${pokemon.price}</p>
            <button onClick={() => this.removeItemFromCart(pokemon.key)}>Delete</button>
            <hr className={classes.hr}/>
            </div>
          </li>
        ))) : <div className={classes.cartIsEmptyWrapper}><p className={classes.cartIsEmpty}>Cart is empty. Click the "Continue Shopping" button to add Pokemons</p></div> 
      }
        </ul>
        </div>
        <div className={classes.container__price}>
        <h3>Total Price:</h3>
        <p className={classes.cart__containerPrice}>${this.state.totalPrice}</p>
        </div>
        <div className={classes.container__button}>
          {this.state.itemsInCart.length === 0 ? 
        <button className={classes.cart__containerButton} disabled={true}>Checkout <span style={{fontSize: 11}}>(Cart is empty)</span></button>
        :<button className={classes.cart__containerButton} disabled={false}><Link to="/form">Checkout</Link></button>
          }
        <Link to={{
          pathname: "/",
          state: {totalPrice: this.state.totalPrice, pokemonsInCart: this.state.itemsInCart}
        }}>
        <button className={classes.cart__containerButton} onClick={this.state.itemsInCart.cartRemove}>Continue Shopping</button>
        </Link>
  </div>
      </div>
      </Aux>
    )
  }
}

export default CartCon