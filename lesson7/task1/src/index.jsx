import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5];

const numberElems = numbers.map(num => <li>{num}</li>)

const element = <ul>
    <li>{numbers [0]}</li>
    <li>{numbers [1]}</li>
    <li>{numbers [2]}</li>
    <li>{numbers [3]}</li>
    <li>{numbers [4]}</li>
</ul>

ReactDOM.render(element, rootElement);