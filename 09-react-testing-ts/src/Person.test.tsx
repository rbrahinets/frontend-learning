import { render, screen } from '@testing-library/react';
import { Person } from './Person';

test('renders a name', () => {
    render(<Person name="Rostik" />);
    // const divElement = screen.getByText(/Name is Rostik/i);
    // expect(divElement).toBeInTheDocument();
    const divElement = screen.getByRole('contentinfo');
    expect(divElement).toHaveTextContent('Name is Rostik');
    expect(divElement).toHaveAttribute('role', 'contentinfo');
});
