import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import productReducer from './productRedux';

// define initial state and shallow-merge initial data
const initialState = {
  products: {
    loading: {
      active: false,
      error: false,
    },
    data: [],
  },
};

// define reducers
const reducers = {
  products: productReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(
    applyMiddleware(thunk)// będą działać jednocześnie narzędzia developerskie dla Reduksa, jak i Thunk.
  )
);

export default store;