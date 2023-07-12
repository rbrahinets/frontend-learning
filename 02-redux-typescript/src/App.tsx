import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
        actionCreators,
        dispatch
    );
    const amount = useSelector((state: State) => state.bank);

    return (
        <div className="App">
            <h1>{amount}</h1>
            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withdrawMoney(500)}>Withdraw</button>
            <button onClick={() => bankrupt()}>Bankrupt</button>
        </div>
    );
};

export default App;
