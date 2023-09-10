import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DefaultButton from './DefaultButton';

describe('<DefaultButton />', () => {
  test('it should mount', () => {
    render(<DefaultButton />);
    
    const defaultButton = screen.getByTestId('DefaultButton');

    expect(defaultButton).toBeInTheDocument();
  });
});