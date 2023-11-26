import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 

import { ChangeLanguage } from '@/app/components/ChangeLanguage';
import { changeLanguage } from '@/redux/features/productSlice';

const mockStore = configureStore([]);
const initialState = {
  product: {
    language: 'initialLanguage', 
  },
};

describe('ChangeLanguage component', () => {
  it('dispatches changeLanguage action when buttons are clicked', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ChangeLanguage />
      </Provider>
    );

    const spanishButton = screen.getByText('🇪🇸');
    const englishButton = screen.getByText('🇪n');


    fireEvent.click(spanishButton);
    fireEvent.click(englishButton);


    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(changeLanguage('ESP'));
    expect(actions[1]).toEqual(changeLanguage('ENG'));
  });
});