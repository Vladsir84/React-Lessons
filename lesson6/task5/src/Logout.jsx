import React from 'react';


const Logout = props => {
   
        return (
            <button
                className="logout btn"
                onClick={props.onLogout}
            >
                Logout
            </button>
        )
    };


export default Logout;