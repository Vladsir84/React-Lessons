import React from "react";
import "./comment.scss";
import moment from "moment";
import UserInfo from './UserInfo';

const date = date => moment(date).format("DD MMM YYYY");

function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment__text">
                {props.text}
            </div>
            <div className="comment__date">
                {date(props.date)}
            </div>
        </div>
    );
}

export default Comment;