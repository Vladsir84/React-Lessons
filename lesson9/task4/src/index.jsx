import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserList from './UserList';


const rootElement = document.querySelector('#root');

const users = [
    {
        name: Tad,
        age: 18,
    },

    {
        name: Anna,
        age: 45,
    },
]



ReactDOM.render(<UserList users={users} />, rootElement);