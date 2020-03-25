import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the entire layout', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('container')).toBeInTheDocument();
});
