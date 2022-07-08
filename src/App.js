import React, { useRef } from 'react';
//export한 Hello 컴포넌트를 불러온다.
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const users = [
    {
        id: 1,
        username: 'gusrl4025',
        email: 'gusrl4025@gmail.com'
    },
    {
        id: 2,
        username: 'dizzi',
        email: 'dizzi@gmail.com'
    },
    {
        id: 3,
        username: '김현기',
        email: '김현기@gmail.com'
    },
  ];
  return (
    <UserList users={users}/>
  );
}

export default App;