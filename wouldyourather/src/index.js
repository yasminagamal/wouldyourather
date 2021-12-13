import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import combineReducers from './Reducers/combineReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './middleware';

const store = createStore(combineReducers, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
