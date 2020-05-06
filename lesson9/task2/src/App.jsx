import React from 'react';
import UserForm from './UserForm';


const App = () => {

    return (
        <UserForm onSubmit={userData => console.log(userData)} />

    );
};


export default App;