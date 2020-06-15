import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//import styles from './Header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function HeaderLog () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <nav>
          <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' style={{ textDecoration: 'none', color: 'white', margin: 5 }}> <Button color="inherit">Login</Button></NavLink>
            <NavLink  to={`${process.env.PUBLIC_URL}/dashboard`} activeClassName='active' style={{ textDecoration: 'none', color: 'white', margin: 5 }}>Dashboard</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' style={{ textDecoration: 'none', color: 'white', margin: 5 }}>Kitchen</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' style={{ textDecoration: 'none', color: 'white', margin: 5 }}>Tables</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active' style={{ textDecoration: 'none', color: 'white', margin: 5 }}>Ordering</NavLink>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
