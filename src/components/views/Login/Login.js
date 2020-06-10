import React from 'react';
import styles from './Login.scss';
import { Link } from 'react-router-dom';


const Login= () => (
  <div className ={styles.component} >
    <h2> Login view</h2>
    <Link to={`${process.env.PUBLIC_URL}/`}></Link>
  </div>
);

export default Login;
