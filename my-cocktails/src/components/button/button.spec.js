import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

describe('Button', () => {
  it('renders', () => {
    render(<Button/>)
  });

  it('should contain the provided text', () => {
    render(<Button text="Click me"/>);
    const button = screen.getByRole('button').getElementsByClassName('MuiButton-label')[0];
    expect(button).toHaveTextContent('Click me')
});

it('should execute the provided onClick handler', () => {
  const mockHandler = jest.fn();
  render(<Button onClick={mockHandler}/>);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(mockHandler).toHaveBeenCalled();
});

it('should contain the correct class when supplied with a certain variant', () => {
    render(<Button variant="contained" text="Button with the contained class"/>);
    render(<Button variant="outlined" text="Button with the outlined class"/>);
    const [containedButton, outlinedButton] = screen.getAllByRole('button');
    expect(containedButton).toHaveClass('MuiButton-contained')
    expect(outlinedButton).toHaveClass('MuiButton-outlined')
});

it('should contain the correct class when supplied with a certain color', () => {
  render(<Button variant="contained" color="primary"/>);
  render(<Button variant="outlined" color="default"/>);
  const [containedButton, outlinedButton] = screen.getAllByRole('button');
  expect(containedButton).toHaveClass('MuiButton-containedPrimary');
  expect(outlinedButton).toHaveClass('MuiButton-outlined');
});
})