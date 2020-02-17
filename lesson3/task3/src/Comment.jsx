import React from 'react';
import './comment.scss';
import UserInfo from './UserInfo';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  console.log(props); // author: {name: "Tom", avatarUrl: "https://avatars3.githubusercontent.com/u10001"}
  return (                               // text: "Good job!"   
                                         //  date: Tue Jan 01 2019 13:32:19 GMT+0200 (Восточная Европа, стандартное время) {}
           // функция Comment принимает три параметра: автора, текст и дату.               
    <div className="comment">              
      <UserInfo user={props.author} />     
      <div className="comment__text">
        {props.text}
      </div>
      <div className="comment__date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
export default Comment;