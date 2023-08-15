import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonWrapper } from './ButtonWrapper';

test('handles onClick', () => {
    const onClick = jest.fn();
    render(<ButtonWrapper title="Add Item" onClick={onClick} />);
    const buttonElement = screen.getByText('Add Item');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
});
