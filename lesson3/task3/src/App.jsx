import React from 'react';
import Comment from './Comment';

const author = {
    name: 'Tom',
    avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
  };
  
const App = () => {
  return (
    <Comment 
    user={author}
    text="Good job!"
    date={new Date('2019-01-01T11:32:19.566Z')}
    /> 
  )
};

export default App;