import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Tables() {
  const classes = useStyles();

  return (
    <div className={styles.root} >
      <Container >
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Tables view
        </Typography>
        <div>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" align="center">
            <Button>  <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Tables Booking</Link></Button>
            <Button><Link to={`${process.env.PUBLIC_URL}/tables/event/:id`}>Tables event</Link></Button>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  );
}





