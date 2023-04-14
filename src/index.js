import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom';


// const element = React.createElement('h1', null, 'Hello World');

// ReactDOM.render(element, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
);