import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import beersReducer from './reducers/beersReducer';
import beerFormData from './reducers/beerFormData';

const reducers = combineReducers({
  beersReducer,
  beerFormData,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
 );
