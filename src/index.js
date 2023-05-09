import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux';
import App from './Components/App'
import thunk from 'redux-thunk';
import { database } from './database/config';

// const element = React.createElement('h1', null, 'Hello World');

// ReactDOM.render(element, document.getElementById('root'));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)));
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);