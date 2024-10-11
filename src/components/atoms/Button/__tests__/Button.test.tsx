import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../Button';

describe('Button Component', () => {
  test('renders the button with default props', () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByTestId('cj-button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  test('renders the button with a custom testId', () => {
    render(<Button text="Click me" testId="custom-button" />);
    const buttonElement = screen.getByTestId('custom-button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  test('renders the button with type submit', () => {
    render(<Button text="Submit" type="submit" />);
    const buttonElement = screen.getByTestId('cj-button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  test('renders the button in disabled state', () => {
    render(<Button text="Disabled" state="disabled" />);
    const buttonElement = screen.getByText('disabled');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the button in loading state', () => {
    render(<Button text="Loading" state="loading" />);
    const buttonElement = screen.getByText('loading');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls handleClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" handleClick={handleClick} />);
    const buttonElement = screen.getByTestId('cj-button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders the button with a custom variant', () => {
    render(<Button text="Custom Variant" variant="primary" />);
    const buttonElement = screen.getByTestId('cj-button');
    expect(buttonElement).toHaveAttribute('variant', 'primary');
  });
});
