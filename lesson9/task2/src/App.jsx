import React from 'react';
import UserForm from './UserForm';


const App = () => {

    return (
        <UserForm createUser={userData => console.log(userData)} />

        );
    };


export default App;