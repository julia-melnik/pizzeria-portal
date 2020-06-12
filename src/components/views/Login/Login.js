import React from 'react';
import styles from './Login.scss';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';


const Login= () => (
  <div className ={styles.component} >
   <div className={styles.login}>
   <LoginForm/>
    <Link to={`${process.env.PUBLIC_URL}/dashboard`}></Link>
   </div>
    
  </div>
);

export default Login;
//need to add log in option 