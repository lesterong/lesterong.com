import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

it('renders welcome message', () => {
  render(<Contact />);
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
