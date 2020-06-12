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
        <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`}>Order Status </Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Orders</Link>
    </Container>

  </div>
);
  
}