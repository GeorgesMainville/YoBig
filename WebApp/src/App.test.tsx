import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
