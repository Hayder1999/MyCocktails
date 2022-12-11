import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

describe('Button', () => {
  it('renders', () => {
    render(<Button/>)
  });

})