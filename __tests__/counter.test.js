import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Counter } from '../app/counter';

describe('Counter', () => {

  it('increments and resets', () => {
    render(<Counter />);

    expect(screen.getByTestId('count')).toHaveTextContent('0');

    fireEvent.click(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('count')).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('count')).toHaveTextContent('2');

    fireEvent.click(screen.getByTestId('reset-button'));

    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

});
