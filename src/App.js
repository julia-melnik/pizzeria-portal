import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Ordering from './components/views/Ordering/Ordering';
import Tables from './components/views/Tables/Tables';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
    <MainLayout>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
        <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
        <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
        <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
    
  );
}

export default App;
