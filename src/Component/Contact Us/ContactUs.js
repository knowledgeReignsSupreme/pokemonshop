import React from 'react';
import Navbar from '../CommonComponents/Navbar/Navbar';
import Footer from '../CommonComponents/Footer/Footer';
import Aux from '../../Aux';
import { FaFacebookSquare, FaPhone, FaAddressCard, FaMailBulk } from 'react-icons/fa';
import classes from './ContactUs.module.css';

const ContactUs = (props) => {
  return(
  <Aux>
    <div className={classes.contactWrapper}>
    <div className={classes.contactInfoContainer}>
    <h1>Contact Us</h1>
    <p><strong>Phone:</strong> +1-202-555-0182 <FaPhone className={classes.contactUsFa}/></p>
    <p><strong>Facebook:</strong> <a href="https://www.facebook.com"><FaFacebookSquare className={classes.contactUsFa}/></a></p>
    <p><strong>Email:</strong> pokemonshop@gmail.com <FaMailBulk className={classes.contactUsFa}/></p>
    <p><strong>Address:</strong> New York, 3515 Angus Road <FaAddressCard className={classes.contactUsFa}/></p>
    </div>
    </div>
  </Aux>
)
  }

export default ContactUs;