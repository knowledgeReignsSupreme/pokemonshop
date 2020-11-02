import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import countries from "./Countries";
import classes from "./Form.module.css";

class Form extends Component {
  state = {
    username: "",
    email: "",
    country: "",
    address: "",
    zipcode: "",
    usernameError: "",
    emailError: "",
    countryError: "",
    addressError: "",
    zipcodeError: "",
    checkoutDone: false,
  };

  validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
  }
  validZip = (e) => {
    var reg = /^\d+$/;
    return reg.test(e);
  };

  checkInput = () => {
    if (!this.state.username.trim() || !this.state.username) {
      this.setState({ usernameError: "Username is too short" });
    } else if (this.state.usernameError !== "") {
      this.setState({ usernameError: "" });
    }
    if (!this.validEmail(this.state.email)) {
      this.setState({ emailError: "Email is not valid" });
    } else if (this.state.emailError !== "") {
      this.setState({ emailError: "" });
    }

    if (this.state.country.length <= 2) {
      this.setState({ countryError: "Country name is not valid" });
    } else if (
      !countries.includes(
        this.state.country.charAt(0).toUpperCase() + this.state.country.slice(1)
      )
    ) {
      this.setState({
        countryError: `We do not ship to ${
          this.state.country.charAt(0).toUpperCase() +
          this.state.country.slice(1)
        }`,
      });
    } else if (this.state.countryError !== "") {
      this.setState({ countryError: "" });
    }
    if (this.state.address.length < 2) {
      this.setState({ addressError: "Address is not valid" });
    } else if (this.state.address !== "") {
      this.setState({ addressError: "" });
    }
    if (!this.validZip(this.state.zipcode) || this.state.zipcode.length <= 4) {
      this.setState({ zipcodeError: "Zip code is not valid" });
    } else if (
      this.validZip(this.state.zipcode) &&
      this.state.zipcode.length > 4
    ) {
      this.setState({ zipcodeError: "" });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    // this.checkInput();
  };


  finalValidator = () => {
    this.setState({checkoutDone: true});
  }

  checkoutDone = () => {
    this.checkInput();
    if (this.state.usernameError === '' &&
    this.state.emailError === '' &&
    this.state.countryError === '' &&
    this.state.addressError === '' &&
    this.state.zipcodeError === '' && 
    this.state.username.trim() &&
    this.validEmail(this.state.email) &&
    this.state.country.length >= 2 &&
    countries.includes(
      this.state.country.charAt(0).toUpperCase() + this.state.country.slice(1)
    ) &&
    this.validZip(this.state.zipcode)
    )
    {
      this.finalValidator();
    }else {
      this.setState({showCheckout: false})
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        {!this.state.checkoutDone ? 
        <div className={classes.formWrapper}>
          <form onSubmit={(e) => this.submitHandler(e)}>
            <div className={classes.formDiv}>
              <label htmlFor="username">Name:</label>
              <input
                name="username"
                id="username"
                type="text"
                onChange={(e) => this.handleChange(e)}
              ></input>
              {this.state.usernameError && (
                <span>{this.state.usernameError}</span>
              )}
            </div>
            <div className={classes.formDiv}>
              <label htmlFor="email">E-mail:</label>
              <input
                name="email"
                id="email"
                type="email"
                onChange={(e) => this.handleChange(e)}
              ></input>
              {this.state.emailError && <span>{this.state.emailError}</span>}
            </div>
            <div className={classes.formDiv}>
              <label htmlFor="country">Country:</label>
              <input
                name="country"
                id="country"
                type="text"
                onChange={(e) => this.handleChange(e)}
              ></input>
              {this.state.countryError && (
                <span>{this.state.countryError}</span>
              )}
            </div>
            <div className={classes.formDiv}>
              <label htmlFor="address">Address:</label>
              <input
                name="address"
                id="address"
                type="text"
                onChange={(e) => this.handleChange(e)}
              ></input>
              {this.state.addressError && (
                <span>{this.state.addressError}</span>
              )}
            </div>
            <div className={classes.formDiv}>
              <label htmlFor="zipcode">Zipcode:</label>
              <input
                name="zipcode"
                id="zipcode"
                type="text"
                onChange={(e) => this.handleChange(e)}
              ></input>
              {this.state.zipcodeError && (
                <span>{this.state.zipcodeError}</span>
              )}
            </div>
              <div className={classes.formButton}>
              <button onClick={this.checkoutDone} type="submit">Submit</button>
              </div>
          </form>
        </div>
        : 
        <div className={classes.confirmationWrapper}>
          <p className={classes.confirmationHeader}>Thank you for your order {this.state.username}!</p>
          <p className={classes.confirmationSubHeader}>An email has been sent to {this.state.email}</p>
          <p className={classes.confirmationSubHeader}>Check out the<Link to="learn-more"> Learn More</Link> page to read about our shipping policy</p>
          </div>
        }
      </Fragment>
    );
  }
}

export default Form;
