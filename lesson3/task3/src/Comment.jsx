import React from "react";
import "./comment.scss";
import moment from "moment";
import AuthorInfo from "./UserInfo";

const formatDate = date => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
    <div className="comment">
      {/* <div className="user-info">
        <img
          className="avatar"
          src={props.author}
          alt={props.author}
        />
        <div className="user-info__name">{props.author}</div>
      </div> */}
      <AuthorInfo author = {props.author}/>
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;