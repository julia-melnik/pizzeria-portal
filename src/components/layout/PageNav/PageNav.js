import React from 'react';
import { NavLink } from 'react-router-dom';


const PageNav = () => (
    <div>
        <nav>
            <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/dashboard`} activeClassName='active'>Dashboard</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Ordering</NavLink>
        </nav>
    </div>

);



export default PageNav;
