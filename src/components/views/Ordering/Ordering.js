import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';


const Ordering = () => (
  <div className ={styles.component} >
    <h2> Ordering view</h2>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`}></Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering/new`}></Link>
  </div>
);

export default Ordering;
