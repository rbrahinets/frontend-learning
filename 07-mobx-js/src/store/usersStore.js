import { action, computed, makeObservable, observable } from 'mobx';

class UsersStore {
    users = [];

    constructor() {
        makeObservable(this, {
            users: observable,
            addUser: action,
            total: computed,
        });
    }

    addUser = (name) => {
        const newUser = {
            id: +Math.random().toFixed(4),
            name,
        };

        this.users.push(newUser);
    };

    get total() {
        return this.users.length;
    }
}

export const usersStore = new UsersStore();
