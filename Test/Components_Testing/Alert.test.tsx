import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Alert } from '../../Component/Alert';

describe('Alert component', () => {
  it('renders message', () => {
    render(<Alert message="Warning!" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Warning!');
  });
});