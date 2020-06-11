import React from 'react';
import styles from './Login.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';


const Login= () => (
  <div className ={styles.component} >
    <h2> Login view</h2>
   <div className={styles.login}>
   <LoginForm/>
    <Link to={`${process.env.PUBLIC_URL}/dashboard`}></Link>
    <Button variant='outlined' size='small' color='secondary'>Check in </Button>    
   </div>
    
  </div>
);

export default Login;
//need to add log in option 