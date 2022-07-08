import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
};

function UserList() {
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
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    )
}

export default UserList;