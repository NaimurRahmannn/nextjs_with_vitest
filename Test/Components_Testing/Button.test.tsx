import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../../Component/Button';

describe('Button component', () => {
  it('renders the button with label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});