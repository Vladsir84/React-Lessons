import React from 'react';
import Avatar from './Avatar';
import './user-info.scss';

function UserInfo(props) {
    console.log(props); // user: {name: "Tom", avatarUrl: "https://avatars3.githubusercontent.com/u10001" 
    return (                          //     параметр, который принимает функция UserInfo  
        <div className="user-info">
            <Avatar
                avatarUrl={props.user.avatarUrl}
                name={props.user.name}
            />
            <div className="user-info__name">
                {props.user.name}
            </div>
        </div>
    );
}
export default UserInfo;