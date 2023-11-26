import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ProductSection } from '@/app/components/ProductSection';
import { fetchProducts } from '@/redux/features/productSlice';

const mockStore = configureStore([]);

describe('ProductSection component', () => {
  it('renders products correctly', async () => {
    const initialState = {
      product: {
        products: [
          {
            id: '1',
            price: 19.99,
            product: 'Sample Product 1',
            brand: 'Sample Brand 1',
            section: 'Sample Section 1',
            image: 'sample-image-url-1.jpg',
          },
          {
            id: '2',
            price: 24.99,
            product: 'Sample Product 2',
            brand: 'Sample Brand 2',
            section: 'Sample Section 2',
            image: 'sample-image-url-2.jpg',
          },
        ],
      },
    };

    const store = mockStore(initialState);

    jest.spyOn(store, 'dispatch').mockImplementation(() => ({ type: 'FETCH_PRODUCTS_SUCCESS' }));

    render(
      <Provider store={store}>
        <ProductSection />
      </Provider>
    );

    await waitFor(() => screen.getByText('Sample Product 1'));

    expect(screen.getByText('Sample Product 1')).toBeInTheDocument();
    expect(screen.getByText('Sample Product 2')).toBeInTheDocument();
  });
});