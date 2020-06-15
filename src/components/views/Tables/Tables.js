import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function Tables() {
  return (
    <div className={styles.component} >
      <Container >
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Tables view
        </Typography>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Tables Booking</Link>
          <Link to={`${process.env.PUBLIC_URL}/tables/event/:id`}>Tables event</Link>
        </div>
      </Container>
    </div>
  );
}

