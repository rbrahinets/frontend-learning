import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store';

const App = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(actions.increment());
    };

    const decrement = () => {
        dispatch(actions.decrement());
    };

    const addBy = () => {
        dispatch(actions.addBy(10));
    };

    return (
        <React.Fragment>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy}>Add Value</button>
        </React.Fragment>
    );
};

export default App;
