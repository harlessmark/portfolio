import { render, screen } from '@testing-library/react';
import About from './';

test('email address is shown', () => {
  render(<About />);
  expect(screen.getByText('harless@duck.com')).toBeInTheDocument();
});

test('portrait has alt text', () => {
  render(<About />);
  expect(screen.getByAltText(/\w+/)).toBeInTheDocument();
})

test('fetches weather and renders icon', async () => {
  render(<About />);
  
  const weather = await screen.findByTestId('weather');
  expect(weather).toBeInTheDocument();
});
