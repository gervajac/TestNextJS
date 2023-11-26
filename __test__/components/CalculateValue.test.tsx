import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { CalculateValue } from '@/app/components/CalculateValue';

// Mock the Redux store
const mockStore = configureStore([]);

describe('CalculateValue component', () => {
  it('calculates average price correctly', async () => {
    const initialState = {
      product: {
        totalProducts: [
          { id: '1', price: 20, section: 'Blanqueria' },
          { id: '2', price: 25, section: 'Remeras' },
          { id: '3', price: 30, section: 'Jeans' },
          { id: '4', price: 15, section: 'Blanqueria' },
        ],
        language: 'ENG',
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CalculateValue />
      </Provider>
    );

    // Select a section
    const selectElement = screen.getByPlaceholderText('Seccion');
    fireEvent.change(selectElement, { target: { value: 'Blanqueria' } });

    // Wait for the calculation to update
    await waitFor(() => expect(screen.getByText('17.50')).toBeInTheDocument());

    // Check if the average price is displayed correctly
    expect(screen.getByText('17.50')).toBeInTheDocument();
  });
});