import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ReduxCounter } from './ReduxCounter';
import { createStore, store } from './store';

test('increment', () => {
    render(
        <Provider store={createStore()}>
            <ReduxCounter />
        </Provider>
    );

    const counter = screen.getByRole('contentinfo');
    expect(counter).toHaveTextContent('0');

    const addButton = screen.getByText(/Increment/i);
    fireEvent.click(addButton);
    expect(counter).toHaveTextContent('1');
});

test('increment again', () => {
    render(
        <Provider store={store}>
            <ReduxCounter />
        </Provider>
    );

    const counter = screen.getByRole('contentinfo');
    expect(counter).toHaveTextContent('0');

    const addButton = screen.getByText(/Increment/i);
    fireEvent.click(addButton);
    expect(counter).toHaveTextContent('1');
});
