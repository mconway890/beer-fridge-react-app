import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import beersReducer from './reducers/beersReducer';
import breweriesReducer from './reducers/breweriesReducer';
import beerFormData from './reducers/beerFormData';
import breweryFormData from './reducers/breweryFormData';
//delegate different pieces of state to separate reducer functions
const reducers = combineReducers({
  beersReducer,
  beerFormData,
  breweriesReducer,
  breweryFormData,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// passing reducers to createStore, app maintains initial state
export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
 );
