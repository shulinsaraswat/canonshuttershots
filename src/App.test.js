import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './component/Main';

jest.mock('./component/Navbar', () => function NavbarMock() {
  return <nav aria-label="Primary navigation" />;
});

test('renders the photography portfolio', () => {
  render(
    <App>
      <Main />
    </App>
  );

  expect(screen.getByRole('heading', { name: /canon shuttershots/i })).toBeInTheDocument();
});
