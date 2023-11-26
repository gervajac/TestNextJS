import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Navigation } from '@/app/components/Navigation';

const mockStore = configureStore([]);
const initialState = {
  product: {
    language: 'ESP'
  },
};

describe('Navigation component', () => {
  it('renders navigation links with the correct text based on language', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
          <Navigation />
      </Provider>
    );

    expect(screen.getByText('INICIO' || "HOME")).toBeInTheDocument(); 
    expect(screen.getByText("AGREGAR PRODUCTO" || "ADD PRODUCT")).toBeInTheDocument(); 
  });
});