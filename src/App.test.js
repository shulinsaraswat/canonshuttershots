import { act, render, screen } from '@testing-library/react';
import App from './App';

test('renders the photography portfolio after loading', async () => {
  jest.useFakeTimers();
  document.body.innerHTML = '<div class="loader-container"></div>';

  render(<App />);

  await act(async () => {
    jest.advanceTimersByTime(2500);
  });

  expect(screen.getByRole('heading', { name: /canon shuttershots/i })).toBeInTheDocument();
  jest.useRealTimers();
});
