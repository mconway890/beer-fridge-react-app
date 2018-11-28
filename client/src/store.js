import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import beersReducer from './reducers/beersReducer';
import breweriesReducer from './reducers/breweriesReducer';
import beerFormData from './reducers/beerFormData';
import breweryFormData from './reducers/breweryFormData';

const reducers = combineReducers({
  beersReducer,
  beerFormData,
  breweriesReducer,
  breweryFormData,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
 );
