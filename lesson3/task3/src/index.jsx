import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

 const authorInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
  };

ReactDOM.render(

    <Comment 
    author={authorInfo}
    text="Good job!"
    date={new Date('2019-01-01T11:32:19.566Z')}
    />, 
    rootElement);
    