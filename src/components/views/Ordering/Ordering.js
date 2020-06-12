import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';



export default function Ordering() {
return (
  <div className={styles.component} >
    <Container >
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      Ordering view
        </Typography>
        <div>
      <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`}>Order id</Link>
    </div> 
    </Container>

  </div>
);
  
}