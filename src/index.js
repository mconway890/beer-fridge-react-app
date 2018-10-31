import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import breweriesReducer from './reducers/breweriesReducer';
import beersReducer from './reducers/beersReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  beers: beersReducer,
  breweries: breweriesReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
