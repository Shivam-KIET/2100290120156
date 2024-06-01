import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent'; // Use a custom component name

test('renders a link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/some text/i); // Change the text to match your component
  expect(linkElement).toBeInTheDocument();
});
