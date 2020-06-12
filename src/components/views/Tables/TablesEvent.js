import React from 'react';
import styles from './Tables.scss';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';



export default function TablesEvent() {
return (
  <div className={styles.component} >
    <Container >
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      Tables Booking view
        </Typography>
        
    </Container>

  </div>
);
  
}