

import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import HeaderLog from '../Header/HeaderLog';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => (
  <div>
    <main>
     
{(<Link to={`${process.env.PUBLIC_URL}/`}></Link> || <Link to={`${process.env.PUBLIC_URL}/login`}></Link>) ? (
              <Header />
            ) : (
              <HeaderLog/>
            )}
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
