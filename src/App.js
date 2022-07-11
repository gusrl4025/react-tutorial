import React, { useRef, useState, useMemo, useCallback } from 'react';
//export한 Hello 컴포넌트를 불러온다.
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  // 얘는 해줄 필요없는데 연습용으로 바꿔놨음
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs(inputs => ({
        ...inputs,
        [name]: value
      }));
    },
    []
  );
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'gusrl4025',
        email: 'gusrl4025@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'dizzi',
        email: 'dizzi@gmail.com',
        active: false
    },
    {
        id: 3,
        username: '김현기',
        email: '김현기@gmail.com',
        active: false
    },
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        username,
        email
      }
      setUsers(users.concat(user));

      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;
    },
    [username, email]
  );

  const onRemove = useCallback(
    id => {
      // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
      setUsers(users => users.filter(user => user.id !== id));
    },
    []
  );

  const onToggle = useCallback(
    id => {
      setUsers(users =>
        users.map(user =>
          user.id === id ? {...user, active: !user.active} : user
        )
      );
    },
    []
  );

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;