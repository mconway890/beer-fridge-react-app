import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import beersReducer from './reducers/beersReducer';
import breweriesReducer from './reducers/breweriesReducer';

const rootReducer = combineReducers({
  beers: beersReducer,
  breweries: breweriesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
   composeEnhancer(applyMiddleware(thunk)),
 );

 export default store;
