import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const element = (
    <body>
        <div className='title'>Todo List</div>
    </body>
);

ReactDOM.render(element, rootElement);