import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

const element = <ul>{listItems}</ul>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

/* import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; */