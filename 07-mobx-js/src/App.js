import React from 'react';
import Users from './components/Users';
import { usersStore } from './store/usersStore';

const App = () => {
    return (
        <React.Fragment>
            <h1>Users</h1>
            <Users store={usersStore} />
        </React.Fragment>
    );
};

export default App;
