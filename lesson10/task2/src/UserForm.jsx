import React from 'react';

const UserForm = ({ userData, handleChange }) => {
    
   
    return (
        // <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <form className="user-form">
            <input
                type="text"
                name="firstName"
                className="user-form__input"
                value={userData.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                className="user-form__input"
                value={userData.lastName}
                onChange={handleChange} 
            />
        </form>
    );
};


export default UserForm;