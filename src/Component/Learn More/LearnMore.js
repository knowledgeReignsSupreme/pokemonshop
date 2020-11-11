import React from 'react';
import Aux from '../../Aux';
import classes from './LearnMore.module.css';

const LearnMore = (props) => (
  <Aux>
  <div className={classes.learnMoreWrapper}>
    <p className={classes.deliveryHeader}>
    We offer free ground shipping* on all orders over $29.99, shipping estimates are as below
    </p>
    
    <p className={classes.deliveryPolicy}><strong>Ground:</strong> Should arrive 2 to 10 business days after shipment</p>
    <p className={classes.deliveryPolicy}><strong>2nd Day:</strong> Should arrive 2 business days after shipment</p>
    <p className={classes.deliveryPolicy}><strong>Overnight:</strong> Should arrive 1 business day after shipment</p>

    </div>
    <div className={classes.trustedWrapper}>

       <h3>The number 1 Pokemon Shop worldwide!</h3>
  <img className={classes.trustedLogo} alt="recommended-store" src="https://1.bp.blogspot.com/-Ml2XxH3m4eM/UcyaUAI1tSI/AAAAAAAAB4I/rITnTj5rQGw/s336/689958d494120c88ec09a0ff5c9f2e2a.jpg"></img>
  </div>
  </Aux>
)

export default LearnMore;