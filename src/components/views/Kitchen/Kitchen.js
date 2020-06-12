import React from 'react';
import styles from './Kitchen.scss';
import KitchenLocal from './KitchenLocal';
import KitchenDelivery from './KichenDelivery';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';



export default function Kitchen() {
return (
  <div className={styles.component} >
    <Container >
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
       Kitchen 
        </Typography>
    </Container>

    <KitchenLocal />
    <KitchenDelivery />
  </div>
);
  
}
