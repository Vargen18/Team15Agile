import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const numbers = ["Hello Max", "Hello Samuel", "Hello Adam"];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

const element = <ul>{listItems}</ul>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
