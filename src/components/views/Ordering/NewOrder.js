import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';


const NewOrder = () => (
  <div className ={styles.component} >
    <h2>New Order Info </h2>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`}>Ordering Status</Link>
  </div>
);

export default NewOrder;