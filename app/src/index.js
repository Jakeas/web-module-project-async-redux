import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { quoteReducer } from './store/reducers';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

const store = createStore(quoteReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

