import React from 'react';


const Avatar = (props) => {
    console.log(props);   // {avatarUrl: "https://avatars3.githubusercontent.com/u10001", name: "Tom"}
                            //              avatarUrl: "https://avatars3.githubusercontent.com/u10001"
                              //            name: "Tom"
    return (
        <img
            className="avatar"
            src={props.avatarUrl}
            alt={props.name}
        />
    );
}

export default Avatar;