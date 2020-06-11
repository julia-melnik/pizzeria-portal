import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';


const OrderingOrderId = () => (
  <div className ={styles.component} >
    <h2> Ordering Status</h2>
    <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Orders</Link>
  </div>
);

export default OrderingOrderId;