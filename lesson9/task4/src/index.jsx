import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserList from './UserList';


const rootElement = document.querySelector('#root');

const users = [
    {
        id: 1,
        name: 'Tad',
        age: 18,
    },

    {
        id: 2,
        name: 'Anna',
        age: 45,
    },
]



ReactDOM.render(<UserList users={users} />, rootElement);