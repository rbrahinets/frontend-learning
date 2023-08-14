import { makeAutoObservable } from 'mobx';
import Athlete from './Athlete';
import React, { useContext, useRef } from 'react';

export default class TeamStore {
    constructor(players: Athlete[]) {
        this.players = players;
        makeAutoObservable(this);
    }

    state: string = '';
    setState = (state: string) => {
        this.state = state;
    };

    mascot: string = '';
    setMascot = (mascot: string) => {
        this.mascot = mascot;
    };

    players: Athlete[] = [];

    get teamName(): string {
        return this.state + this.mascot;
    }

    get teamYearlyCost(): number {
        return this.players.reduce(
            (totalSalary, currentAthlete) =>
                totalSalary + currentAthlete.salary,
            0
        );
    }

    addPlayer(player: Athlete) {
        this.players.push(player);
    }
}

const TeamStoreContext = React.createContext<TeamStore>(
    null as unknown as TeamStore
);

export const useTeamStore = () => useContext(TeamStoreContext);

interface Props {
    children: React.ReactNode;
    players: Athlete[];
}

export const TeamStoreProvider = ({ children, players }: Props) => {
    const store = useRef(new TeamStore(players));

    return (
        <TeamStoreContext.Provider value={store.current}>
            {children}
        </TeamStoreContext.Provider>
    );
};
