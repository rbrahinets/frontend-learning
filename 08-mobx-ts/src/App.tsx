import React from 'react';
import './App.css';
import Athlete from './Athlete';
import { TeamStoreProvider } from './TeamStore';
import Rosters from './Rosters';
import MoneyForm from './MoneyForm';

const lebronJames = new Athlete('Lebron James', 37, 5_000_000);
const stephCurry = new Athlete('Steph Curry', 34, 4_000_000);

const getPlayersFromBackend = (): Athlete[] => {
    return [lebronJames, stephCurry];
};

const App = () => {
    return (
        <React.Fragment>
            <TeamStoreProvider players={getPlayersFromBackend()}>
                <Rosters />
                <MoneyForm />
            </TeamStoreProvider>
        </React.Fragment>
    );
};

export default App;
