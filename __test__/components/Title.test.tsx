import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 

import { Title } from '@/app/components/Title';

describe('Title component', () => {
  it('renders title and subtitle', () => {
    render(<Title />);


    expect(screen.getByText('TEST NEXTJS + NESTJS')).toBeInTheDocument();
    expect(screen.getByText('Gervasio Jacob')).toBeInTheDocument();
  });

  it('applies correct styling', () => {
    render(<Title />);


    const titleElement = screen.getByText('TEST NEXTJS + NESTJS');
    expect(titleElement).toHaveClass('font-bold');
    expect(titleElement).toHaveClass('text-3xl');
    expect(titleElement).toHaveClass('underline');

    const subtitleElement = screen.getByText('Gervasio Jacob');
    expect(subtitleElement).toHaveClass('text-xl');
    expect(subtitleElement).toHaveClass('font-mono');
    expect(subtitleElement).toHaveClass('font-semibold');
  });
});