import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';


const rootElement = document.querySelector('#root');

const users = [
    {
        
        name: 'Tad',
        age: 18,
    },

    {
       
        name: 'Anna',
        age: 45,
    },
]



ReactDOM.render(<UsersList users={users} />, rootElement);