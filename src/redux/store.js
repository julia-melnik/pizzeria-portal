import {combineReducers, createStore} from 'redux';



// define initial state and shallow-merge initial data
const initialState = {
    
  }

// define reducers
const reducers = {

};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);

// merge all reducers with globalReducer


// create store
const store = createStore(
  
  
);

export default store;
