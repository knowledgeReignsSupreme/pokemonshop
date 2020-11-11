import React, { Component } from "react";
import {Route, Switch } from 'react-router-dom';
import PokemonsShop from './Container/PokemonsShop';
import ContactUs from './Component/Contact Us/ContactUs';
import LearnMore from './Component/Learn More/LearnMore';
import Cart from './Container/Cart';
import Footer from './Component/CommonComponents/Footer/Footer';
import Form from './Component/Form/Form';
import Navbar from './Component/CommonComponents/Navbar/Navbar'
import Scroll from './Component/CommonComponents/ScrollButton/ScrollButton';
import "./App.css";


class App extends Component {
  constructor(props){
  super(props);
    this.state = {
      currentPage: 'Shop',

  };
  }
    changeActive = (event) => {
      const newActive = event.target.textContent.replace(/\s/g, "");
      this.setState({ currentPage: newActive });
    };
  
  render() {
    return (
      <main>
        <Navbar />
        <Scroll />
        <Switch>
         <Route path="/" component={PokemonsShop} exact/>
         <Route path="/contact"  component={ContactUs}  />
         <Route path="/learn-more"  component={LearnMore} />
         <Route path="/cart" component={Cart} />
         <Route path="/form" component={Form} />
        </Switch>
        <Footer />
      </main>
    );
  }
}
export default App;
