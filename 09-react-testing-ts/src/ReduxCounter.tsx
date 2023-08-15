import { useDispatch, useSelector } from 'react-redux';
import { RootState, decrement, increment } from './store';

export const ReduxCounter = () => {
    const count = useSelector((state: RootState) => state.counter).value;
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span role="contentinfo">{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </>
    );
};
