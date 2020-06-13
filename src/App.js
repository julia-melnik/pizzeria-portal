import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Ordering from './components/views/Ordering/Ordering';
import OrderingOrderId from './components/views/Ordering/OrderingOrderId';
import OrderingNew from './components/views/Ordering/OrderingNew';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/Tables/TablesBooking';
import TablesEvent from './components/views/Tables/TablesEvent';
import Container from './components/layout/Container/Container.js';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter basename={'/panel'}>
    <MainLayout>
      <Container>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
        <Route exact path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard} />
        <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
        <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={OrderingNew} />
        <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={OrderingOrderId} />
        <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
        <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
        <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEvent} />
      </Switch>
      </Container>
    </MainLayout>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
