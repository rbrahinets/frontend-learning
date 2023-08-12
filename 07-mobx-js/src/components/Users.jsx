import React, { useState } from 'react';

const Users = () => {
    const [inputValue, setInputValue] = useState('');
    const [users, setUsers] = useState([]);

    const addUser = () => {
        const newUser = {
            id: +Math.random().toFixed(4),
            name: inputValue,
        };

        setUsers([...users, newUser]);
        setInputValue('');
    };

    return (
        <React.Fragment>
            <div>Total: {users.length}</div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addUser}>Add user</button>
            </div>
            <div>
                {users.map((user, index) => (
                    <div key={index}>{user.name}</div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Users;
